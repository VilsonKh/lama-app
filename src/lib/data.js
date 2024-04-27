
import { connectToDb } from "./connectDB";
import { Post, User } from "./models";

export const getPosts = async () => {
  try {
    connectToDb()
    const posts = await Post.find()
    return posts
  } catch(error) {
    console.log(error)
    throw new Error(error)
  }
}

export const getPost = async (slug) => {
  try {
    connectToDb()
    const post = await Post.findOne({slug})
    console.log(post)
    return post
  } catch(error) {
    console.log(error)
    throw new Error(error)
  }
}

export const getUser = async (id) => {
  try {
    connectToDb()
    const user = await User.findById(id)
    return user
  } catch(error) {
    console.log(error)
    throw new Error(error)
  }
}

export const getUsers = async () => {
  try {
    connectToDb()
    const users = await User.find()
    return users
  } catch(error) {
    console.log(error)
    throw new Error(error)
  }
}