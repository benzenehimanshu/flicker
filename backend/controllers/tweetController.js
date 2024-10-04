import { Tweet } from "../models/tweetSchema.js";
import { User } from "../models/userSchema.js";

/////////logic for creating a tweet//////////
export const createTweet = async (req, res) => {
  try {
    const { description, id } = req.body;
    if (!description || !id) {
      return res.status(401).json({
        message: "Fields are required",
        success: false,
      });
    }
    await Tweet.create({
      description,
      userId: id,
    });
    return res.status(200).json({
      message: "Tweet created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

///////logic for deleting the tweet here//////
export const deleteTweet = async (req, res) => {
  try {
    const { id } = req.params;

    // Use await to wait for the deletion result
    const answer = await Tweet.findByIdAndDelete(id);

    // Check if a tweet was found and deleted
    if (answer) {
      return res.status(200).json({
        message: "Tweet Deleted Successfully",
        success: true,
      });
    } else {
      return res.status(404).json({
        message: "Tweet not found",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};

//////tweet like  or dislike logioc here
export const likeOrDislike = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const tweetId = req.params.id;

    // Find the tweet by its ID
    const tweet = await Tweet.findById(tweetId);

    // Check if the tweet exists
    if (!tweet) {
      return res.status(404).json({
        message: "Tweet not found",
        success: false,
      });
    }

    // Check if the user has already liked the tweet
    if (tweet.likes.includes(loggedInUserId)) {
      // Dislike (remove the like)
      await Tweet.findByIdAndUpdate(tweetId, {
        $pull: { likes: loggedInUserId },
      });
      return res.status(200).json({
        message: "User disliked the tweet",
        success: true,
      });
    } else {
      // Like (add the like)
      await Tweet.findByIdAndUpdate(tweetId, {
        $push: { likes: loggedInUserId },
      });
      return res.status(200).json({
        message: "User liked the tweet",
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};
////////bookmarking the tweet logic////////////////
export const bookmarkTweet = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const tweetId = req.params.id;

    // Find the tweet by its ID
    const tweet = await Tweet.findById(tweetId);

    // Check if the tweet exists
    if (!tweet) {
      return res.status(404).json({
        message: "Tweet not found",
        success: false,
      });
    }

    // Check if the user has already liked the tweet
    if (tweet.bookmarks.includes(loggedInUserId)) {
      // Dislike (remove the like)
      await Tweet.findByIdAndUpdate(tweetId, {
        $pull: { bookmarks: loggedInUserId },
      });
      return res.status(200).json({
        message: "User unbookmarked the tweet",
        success: true,
      });
    } else {
      // Like (add the like)
      await Tweet.findByIdAndUpdate(tweetId, {
        $push: { bookmarks: loggedInUserId },
      });
      return res.status(200).json({
        message: "User bookmarked the tweet",
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};

//get all tweets
export const getAllTweets = async (req, res) => {
  try {
    //loggedinuserkatweet + following tweet
    const id = req.params.id;
    const loggedInUser = await User.findById(id);
    const loggedInUserTweets = await Tweet.find({ userId: id });
    const followingTweet = await Promise.all(
      loggedInUser.following.map((otherUsersId) => {
        return Tweet.find({ userId: otherUsersId });
      })
    );
    return res.status(200).json({
      tweets: loggedInUserTweets.concat(...followingTweet),
    });
  } catch (error) {
    console.log(error);
  }
};

//getfollowingtweet

export const followingTweet = async (req, res) => {
  try {
    //loggedinuserkatweet + following tweet
    const id = req.params.id;
    const loggedInUser = await User.findById(id);
    // const loggedInUserTweets = await Tweet.find({ userId: id });
    const followingUserTweet = await Promise.all(
      loggedInUser.following.map((otherUsersId) => {
        return Tweet.find({ userId: otherUsersId });
      })
    );
    return res.status(200).json({
      tweets: [].concat(...followingUserTweet),
    });
  } catch (error) {
    console.log(error);
  }
};
