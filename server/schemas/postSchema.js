import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  body: String,
  title: String,
  author: String
});

export default mongoose.model("Post", userSchema);
