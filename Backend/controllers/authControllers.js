import { User } from "../models/authModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendResetEmail, sendSuccessEmail } from "../mailtrap/email.js";
import crypto from "crypto";

const getController = async (req, res) => {
  try {
    const users = await User.find(); 
    res.status(200).json({ message: "Get data successfully", users }); 
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const registerController = async (req, res) => {
  const { email, password, role, username , cnic} = req.body;

  //  user already exists
  const user = await User.findOne({ email });
  console.log(user);

  if (user) {
    return res.status(400).json({ message: "Email already exists" });
  }

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      email,
      password: hashedPassword,
      role,
      username,
      cnic
    });
    if(role == 'admin'){
      res.status(201).json({ message: "admin created successfully", newUser });

    }
    else{
      res.status(201).json({ message: "User created successfully", newUser });

    }
    // Send success response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  console.log(user.role)
  if (!user) {
    return res.status(400).json({ message: "Email not found" });
  }

  const isValidatePassword = await bcrypt.compare(password, user?.password);
  if (!isValidatePassword) {
    return res.status(400).json({ message: "Invalid Password" });
  }

  const token = jwt.sign({ id: user?._id }, process.env.JWT_TOKEN);
 

  res.status(200).json({ message: "Login successful", token, user });
};

const logoutController = (req, res) => {
  res.status(200).send({ message: "Logout successfully" });
};

export { registerController, loginController, logoutController ,getController};