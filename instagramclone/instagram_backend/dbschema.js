import mongoose from "mongoose";

const postData = mongoose.Schema({
  caption: String,
  user: String,
  image: String,
  commant: [],
});

export default mongoose.model("insta", postData);
