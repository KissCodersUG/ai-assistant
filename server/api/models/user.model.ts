import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    apiKey: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
);

export type UserModel = {
  _id: string;
  email: string;
  password: string;
  apiKey?: string;
  createdAt: Date;
  updatedAt: Date;
};

export const UserModel = model<UserModel>("User", userSchema);
