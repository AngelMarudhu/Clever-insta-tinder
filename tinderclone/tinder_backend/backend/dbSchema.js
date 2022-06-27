import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
  name: String,
  imgUrl: String,
});

const PostMessage = mongoose.model("cards", cardSchema);

export default PostMessage;
