import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connection = () => {
  try {
    const connectionUrl =
      "mongodb+srv://digmelishvilil:Giodasaba123!@cluster0.3gz1vq5.mongodb.net/ToDoApp";
    return mongoose.connect(connectionUrl);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default connection;
