"use server";
import Blog from "@/models/blog.model";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import joi from "joi";
import slugify from "slugify";
import User from "@/models/user.model";

const blogSchema = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
  image: joi.string().optional(),
  tags: joi.string().required(),
  authorId: joi.number().required(),
});

export const deleteBlog = async formData => {
  const { id } = Object.fromEntries(formData);
  try {
    const response = await Blog.destroy({ where: { id } });
    console.log(response);
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
    console.log(response);
  } catch (error) {
    console.log(error);
    throw error;
  }
  revalidateTag("users");
};

export const updateBlog = async formData => {
  const { id, title, content, tags, slug } = Object.fromEntries(formData);
  try {
    await Blog.update(
      { title, content, tags },
      { where: { id }, returning: true, individualHooks: true }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
  revalidateTag("blog");
  redirect("/admin/blogs");
};

export const createBlog = async formData => {
  const { title, content, tags, authorId } = Object.fromEntries(formData);

  const { error } = blogSchema.validate({ title, content, tags, authorId });

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
    const response = await Blog.create({ title, content, tags, authorId });
  } catch (error) {
    console.log(error);
    throw error;
  }
  revalidateTag("blogs");
};

export const updateUser = async formData => {
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
    revalidatePath('/dashboard/profile')
    redirect('/dashboard')
  };