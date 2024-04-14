import { NextResponse } from "next/server";
import Blog from "@/models/blog.model";
import joi from "joi";
import slugify from "slugify";

const blogSchema = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
  image: joi.string().optional(),
  tags: joi.string().required(),
  authorId: joi.number().required(),
});

export const POST = async request => {
  const body = await request.json();
  const { error } = blogSchema.validate(body);

  if (error) {
    const message = `Invalid request body: ${error.message}`;
    return new NextResponse(message, { status: 400 });
  }

  try {
    // Check if title already exists
    const slug = slugify(body.title, { lower: true });
    const blog = await Blog.findOne({ where: { slug } });
    if (blog) {
      return new NextResponse("Title already exists", { status: 400 });
    }
    const response = await Blog.create(body);
    return new NextResponse(JSON.stringify(response), { status: 200 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
