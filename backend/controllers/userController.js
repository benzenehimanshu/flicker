import { User } from "../models/userSchema.js";
import { Tweet } from "../models/tweetSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const Register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    // Check if all fields are provided
    if (!name || !username || !email || !password) {
      return res.status(401).json({
        message: "All fields are required.",
        success: false,
      });
    }

    // Check if username already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(401).json({
        message: "Username already exists.",
        success: false,
      });
    }

    // Check if email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(401).json({
        message: "Email already exists.",
        success: false,
      });
    }

    // Hash password and create a new user
    const hashedPassword = await bcryptjs.hash(password, 16);
    await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Account created successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong.",
      success: false,
    });
  }
};
////Login logic is implemented here

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "All fields are required.",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      return res.status(401).json({
        message: "Invalid Email or Password!",
        success: false,
      });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "incorrect email or passsword",
        success: false,
      });
    }
    const tokenData = {
      userId: user._id,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });
    return res
      .status(201)
      .cookie("token", token, { expiresIn: "1d", httpOnly: true })
      .json({
        message: `Welcome back ${user.name}`,
        success: true,
      });
  } catch (error) {
    res.status(401).json({
      message: "",
    });
  }
};

////////////Logout logic here//////////
export const Logout = (req, res) => {
  return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
    message: "User Logged Out Successfully",
    success: true,
  });
};
//////////bookmarking logic here////////////
export const Bookmarks = async (req, res) => {
  try {
    // Get the logged-in user's ID from the request object (set by the authentication middleware)
    const loggedInUserId = req.body.id; // Assuming req.user contains the authenticated user's ID
    const tweetId = req.params.id;

    // Find the tweet by its ID
    const user = await User.findById(loggedInUserId);

    if (user.bookmarks.includes(tweetId)) {
      //remove the  tweet from bookmarks
      await User.findByIdAndUpdate(loggedInUserId, {
        $pull: { bookmarks: tweetId },
      });
      return res.status(200).json({
        message: "Removed From Bookmarks",
        success: true,
      });
    } else {
      //add the tweeet to the bookmarks
      await User.findByIdAndUpdate(loggedInUserId, {
        $push: { bookmarks: tweetId },
      });
      return res.status(200).json({
        message: "Saved to Bookmarks",
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//////getting profile details/////////

export const getMyProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).select("-password");
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

//other users
export const getOtherUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const otherUsers = await User.find({ _id: { $ne: id } });
    if (!otherUsers) {
      return res.status(401).json({
        message: "Currently do not have other users",
      });
    }
    return res.status(200).json({
      otherUsers,
    });
  } catch (error) {
    console.log(error);
  }
};

///follow and following logic here
export const follow = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const userId = req.params.id;

    const loggedInUser = await User.findById(loggedInUserId); //himanshu  yadav
    const user = await User.findById(userId); ///keshav
    if (!user.followers.includes(loggedInUserId)) {
      await user.updateOne({ $push: { followers: loggedInUserId } });
      await loggedInUser.updateOne({ $push: { following: userId } });
    } else {
      return res.status(400).json({
        message: `User is already follwing ${user.name}`,
      });
    }
    return res.status(200).json({
      message: `${loggedInUser.name} just followed ${user.name}`,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//unfollow logic
export const unfollow = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const userId = req.params.id;

    const loggedInUser = await User.findById(loggedInUserId); //himanshu  yadav
    const user = await User.findById(userId); ///keshav
    if (loggedInUser.following.includes(userId)) {
      await user.updateOne({ $pull: { followers: loggedInUserId } });
      await loggedInUser.updateOne({ $pull: { following: userId } });
    } else {
      return res.status(400).json({
        message: `User has not followed yet!`,
      });
    }
    return res.status(200).json({
      message: `${loggedInUser.name} unfollowed ${user.name}`,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
