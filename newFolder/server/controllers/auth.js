import jwt from "jsonwebtoken";

import visiters from "../models/auth.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const exstinguser = await visiters.findOne({ email });
    if (exstinguser) {
      return res.status(400).json({ message: "User already exist..." });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newVisiter = await visiters.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(200).json({ result: newVisiter });
  } catch (error) {
    res.status(500).json("Something went wronggggg.......");
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingVisiter = await visiters.findOne({ email });

    if (!existingVisiter) {
      return res.status(400).json({ message: "Visiter don't exist..." });
    }

    const isPassCrt = await bcrypt.compare(password, existingVisiter.password);
    if (!isPassCrt) {
      return res.status(400).json({ message: "Invalid creditial..." });
    }
    const token = jwt.sign(
      { email: existingVisiter.email, id: existingVisiter._id },
      "test",
      { expiresIn: "1hr" }
    );

    res.status(200).json({ result: existingVisiter, token });
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
};
