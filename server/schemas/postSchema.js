import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
  body: String,
  title: String,
  author: String,
  date: String
});

export default mongoose.model("Post", postSchema);
