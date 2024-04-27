import { connectToDb } from "@/lib/connectDB";
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (request) => {
	try {
		connectToDb();
    const posts = await Post.find()
    return NextResponse.json(posts) 
	} catch (error) {
		throw new Error(error);
	}
};
