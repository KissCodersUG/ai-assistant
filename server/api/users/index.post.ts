import bcrypt from "bcrypt";
import { UserModel } from "../models/user.model";
import { MongoError } from "mongodb";
import { createUserSchema } from "~/schemas/createUser.schema";

export default defineEventHandler(async (event) => {
  const body =
    (await readBody<{ email: string; password: string }>(event)) || {};

  const result = createUserSchema.safeParse(body);
  if (!result.success) {
    throw createError({
      status: 403,
      statusMessage: result.error.errors[0].message,
    });
  }

  const { email, password } = result.data;

  const hashedPassword = await bcrypt.hash(password, 12);
  await UserModel.create({
    email: email.toLowerCase(),
    password: hashedPassword,
  }).catch((error: MongoError) => {
    if (error.code === 11000) {
      throw createError({
        status: 403,
        statusMessage: "Bad Request - Email already exists",
      });
    }
    throw createError({ status: 500, statusMessage: "Internal Server Error" });
  });

  return { message: "User created", status: 201 };
});
