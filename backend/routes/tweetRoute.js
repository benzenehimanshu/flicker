import express from "express";
const router = express.Router();
// import { Login, Logout, Register } from "../controllers/userController.js";s
import {
  bookmarkTweet,
  createTweet,
  deleteTweet,
  followingTweet,
  getAllTweets,
  likeOrDislike,
} from "../controllers/tweetController.js";
import isAuthenticated from "../config/auth.js";

router.route("/createtweet").post(isAuthenticated, createTweet);
router.route("/deletetweet/:id").delete(isAuthenticated, deleteTweet);
router.route("/like/:id").put(isAuthenticated, likeOrDislike);
// router.route("/bookmark/:id").put(isAuthenticated, bookmarkTweet);
router.route("/getalltweets/:id").get(isAuthenticated, getAllTweets);
router.route("/followingtweet/:id").get(isAuthenticated, followingTweet);
export default router;
