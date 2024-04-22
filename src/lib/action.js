"use server";
import Blog from "@/models/blog.model";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect, usePathname } from "next/navigation";
import joi from "joi";
import slugify from "slugify";
import User from "@/models/user.model";
import fs from "fs";
import Comment from "@/models/comment.model";

const blogSchema = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
  image: joi.string().optional(),
  tags: joi.string().required(),
  authorId: joi.number().required(),
  description: joi.string().required(),
});

export const deleteBlog = async formData => {
  const { id } = Object.fromEntries(formData);
  try {
    const response = await Blog.destroy({ where: { id } });
    revalidateTag("blogs");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteUser = async formData => {
  const { id } = Object.fromEntries(formData);
  try {
    const response = await User.destroy({ where: { id } });
  } catch (error) {
    console.log(error);
    throw error;
  }
  revalidateTag("users");
};

export const updateBlog = async formData => {
  const { id, title, content, tags, slug, pathname, image, description } =
    Object.fromEntries(formData);
  try {
    await Blog.update(
      { title, content, tags, description },
      { where: { id }, returning: true, individualHooks: true }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
  revalidateTag("blog");
  if (pathname) redirect("/dashboard/blogs");
  else redirect("/admin/blogs");
};

export const createBlog = async formData => {
  const { title, content, tags, authorId, image, description } = Object.fromEntries(formData);

  const { error } = blogSchema.validate({ title, content, tags, authorId, description });

  if (error) {
    const message = `Invalid request body: ${error.message}`;
    throw new Error(message);
  }
  try {
    const slug = slugify(title, { lower: true });
    const blog = await Blog.findOne({ where: { slug } });
    if (blog) {
      throw new Error("Blog already exists");
    }
    const response = await Blog.create({ title, content, tags, authorId, description });
  } catch (error) {
    console.log(error);
    throw error;
  }
  revalidateTag("blogs");
  redirect("/dashboard/blogs");
};

export const updateUser = async formData => {
  const { id, username, gender, bio, role } = Object.fromEntries(formData);
  const update = {};
  if (username) update.username = username;
  if (gender) update.gender = gender;
  if (bio) update.bio = bio;
  if (role) update.role = role;
  try {
    await User.update(update, { where: { id }, returning: true, individualHooks: true });
  } catch (error) {
    console.log(error);
    throw error;
  }
  revalidateTag("users");
};

export const updateProfile = async formData => {
  const { id, username, gender, bio } = Object.fromEntries(formData);
  const update = {};
  if (username) update.username = username;
  if (gender) update.gender = gender;
  if (bio) update.bio = bio;
  try {
    await User.update(update, { where: { id }, returning: true, individualHooks: true });
  } catch (error) {
    console.log(error);
    throw error;
  }
  revalidatePath("/dashboard/profile");
  redirect("/dashboard");
};

export const createComment = async formData => {
  const { blogId, content } = Object.fromEntries(formData);
  try {
    const comment = await Comment.create({ blogId, content });
  } catch (error) {
    console.log(error);
    throw error;
  }
  revalidatePath(`/blog/${blogId}`);
};

export const registerUserAsAdmin = async formData => {
  const { username, password } = Object.fromEntries(formData);
  try {
    const user = await User.create({ username, password, role: "admin" });
  } catch (error) {
    console.log(error);
    throw error;
  }
  revalidateTag("users");
};
