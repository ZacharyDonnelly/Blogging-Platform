import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  display: String,
  password: String
});

export default mongoose.model("User", userSchema);
