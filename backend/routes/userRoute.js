import express from "express";
const router = express.Router();
import {
  Login,
  Logout,
  Register,
  Bookmarks,
  getMyProfile,
  getOtherUsers,
  follow,
  unfollow,
} from "../controllers/userController.js";
import { createTweet } from "../controllers/tweetController.js";
import isAuthenticated from "../config/auth.js";

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);
router.route("/bookmark/:id").put(isAuthenticated, Bookmarks);
router.route("/profile/:id").get(isAuthenticated, getMyProfile);
router.route("/otherusers/:id").get(isAuthenticated, getOtherUsers);
router.route("/follow/:id").post(isAuthenticated, follow);
router.route("/unfollow/:id").post(isAuthenticated, unfollow);
export default router;
