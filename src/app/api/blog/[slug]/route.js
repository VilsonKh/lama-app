import {Post} from '@/lib/models';
import { connectToDb } from '@/lib/connectDB';
import { NextResponse } from 'next/server';

export const GET = async (request, {params}) => {
  try {
    connectToDb();
    const post = await Post.findOne({slug: params.slug})
    return NextResponse.json(post)
  } catch (error) {
    throw new Error("Failed to fetch post");
  }
}

export const DELETE = async (request, {params}) => {
  try {
    connectToDb();
    const post = await Post.findOneAndDelete({slug: params.slug})
    return NextResponse.json(post)
  } catch (error) {
    throw new Error("Failed to delete post");
  }
}