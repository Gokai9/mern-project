import PostModel from "../models/PostModel.js";

export const getPosts = async (req, res) => {
  try {
    const data = PostModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const { title, message, creator, tags, selectedFile, likeCount } = req.body;
  const newPost = new PostModel({
    title,
    message,
    creator,
    tags,
    selectedFile,
    likeCount,
  });
  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
