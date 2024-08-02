import { Request, Response } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const generateToken = (userId: mongoose.Types.ObjectId, email: string, name: string) => {
  return jwt.sign(
    { id: userId.toHexString(), email, name },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" }
  );
};

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = generateToken(user._id as mongoose.Types.ObjectId, user.email, user.name);
    res.status(200).json({ message: "User login successfully", user, token });
  } catch (error) {
    res.status(400).json({ error });
  }
};
