import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Register User
export const registerUser = async (req, res) => {
  try {
    // Hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(201).send('User created successfully');
  } catch (error) {
    res.status(500);
    throw new Error('Something went wrong!');
  }
};

// Login User
export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    if (!user) {
      res.status(404).send('User not found');
    }

    // Verified Password
    const verifiedPassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!verifiedPassword) {
      res.status(400).send('Incorrect password or username');
    }

    // Create Token for authorization
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );

    // Hide password and isAdmin from the response
    const { password, isAdmin, ...otherData } = user._doc;
    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json({ ...otherData });
  } catch (error) {
    res.status(500);
    throw new Error('Something went wrong!');
  }
};
