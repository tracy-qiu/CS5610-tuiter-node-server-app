import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    tuit: String,
    likes: Number,
    dislikes: Number,
    liked: Boolean,
    topic: String,
    title: String,
    handle: String,
    username: String,
    time: String,
    image: String,
  },
  { collection: "tuits" }
);
export default schema;
