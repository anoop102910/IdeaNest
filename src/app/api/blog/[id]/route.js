import Blog from "@/models/blog.model";
import { NextResponse } from "next/server";

export const DELETE = async (request,{params}) => {
  const id = params.id;
  try {
    const blog = await Blog.findOne({ where: { id } });
    if (!blog) {
      return new NextResponse("Blog not found", { status: 404 });
    }
    await blog.destroy();
    return new NextResponse(JSON.stringify({ message: "Blog deleted" }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};

export const PUT = async request => {
  const id = request.params.id;
  const body = await request.json();
  const { error } = blogSchema.validate(body);

  if (error) {
    const message = `Invalid request body: ${error.message}`;
    return new NextResponse(message, { status: 400 });
  }

  try {
    const blog = await Blog.findOne({ where: { id } });
    if (!blog) {
      return new NextResponse("Blog not found", { status: 404 });
    }
    await blog.update(body);
    const updatedBlog = await Blog.findOne({ where: { id } });
    return new NextResponse(JSON.stringify(updatedBlog), { status: 200 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};

export const GET = async request => {
  const id = request.params.id;
  try {
    const blog = await Blog.findOne({ where: { id } });
    if (!blog) {
      return new NextResponse("Blog not found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
