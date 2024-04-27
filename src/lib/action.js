"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectDB";
import { Post } from "./models";
import { signIn, signOut } from "./auth";

export const addPost = async (formData) => {

	const { title, desc, slug, userId } = Object.fromEntries(formData);
	console.log(title, desc, slug, userId);

	try {
		connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId
    });

    await newPost.save()
    console.log('saved to db')
    revalidatePath("/blog")
	} catch (error) {
		console.log(error);
	}
};

export const deletePost = async (formData) => {

	const { id} = Object.fromEntries(formData);

	try {
		connectToDb();
    const newPost = await Post.findByIdAndDelete(id)
    console.log('deleted from db')
    revalidatePath("/blog")
	} catch (error) {
		console.log(error);
	}
};

export const handleGithubLogin = async () => {
	await signIn("github")
}

export const handleGithubLogout = async () => {
	await signOut()
}	