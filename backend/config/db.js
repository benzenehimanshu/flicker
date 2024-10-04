import mongoose from "mongoose";
import dotenv from "dotenv";
const databaseConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB Connected Successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};
export default databaseConnection;
