import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./connectDB";
import { User } from "./models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
	try {
		connectToDb();
		console.log(credentials);
		const user = await User.findOne({ username: credentials.username });
		if (!user) {
			throw new Error("User not found");
		}

		const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

		if (!isPasswordCorrect) {
			throw new Error("Wrong password");
		}

		return user;
	} catch (error) {
		console.log('error in authorization')
		throw new Error("Error in authorization");

	}
};

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	providers: [
		GitHub({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		CredentialsProvider({
			async authorize(credentials) {
				try {
					const user = await login(credentials);
					return user;
				} catch (error) {
					return null;
				}
			},
		}),
	],
	// secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async signIn({ user, account, profile }) {
			if (account.provider === "github") {
				connectToDb();
				try {
					const existingUser = await User.findOne({ email: profile.email });

					if (!existingUser) {
						const newUser = new User({
							username: profile.login,
							email: profile.email,
							image: profile.avatar_url,
						});
						await newUser.save();
						console.log(newUser);
					}
				} catch (error) {
					console.log(error);
					return false;
				}
			}
			return true;
		},
	},
});
