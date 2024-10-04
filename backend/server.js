import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/db.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import tweetRoute from "./routes/tweetRoute.js";

const app = express();
dotenv.config();
databaseConnection();
//middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

//apis
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);

app.get("/home", (req, res) => {
  res.status(200).json({
    message: "coming from backend",
  });
});
app.listen(process.env.PORT, () => {
  console.log(`Server is running on the port ${process.env.PORT}`);
});
