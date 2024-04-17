import User from "@/models/user.model";
import bcrypt from "bcryptjs";
import Joi from "joi";
import { NextResponse } from "next/server";

const registerSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  rememberMe:Joi.boolean().optional()
});

export const POST = async request => {
  const { value, error } = registerSchema.validate(await request.json());
  if (error) {
    const message = `Invalid request body: ${error.details.map(detail => detail.message)}`;
    return new NextResponse(message, { status: 400 });
  }

  try {
    const user = await User.findOne({ where: { email: value.email } });
    if (user) return new NextResponse("User already exists", { status: 400 });
    const hashedPassword = await bcrypt.hash(value.password, 10);
    const response = await User.create({
      username: value.username,
      email: value.email,
      password: hashedPassword,
    });
    return new NextResponse(JSON.stringify(response), { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse(error.message, { status: "500" });
  }
};
