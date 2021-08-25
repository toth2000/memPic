const mongoose = require("mongoose");

const PostMessage = require("../models/postMessage.js");

const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find(); //Getting data from DB
    res.status(200).json(postMessage); //Sending res as json
  } catch (error) {
    res.status(404).json("Error");
    console.log(error);
  }
};

const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });


  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Post found with the given id.");

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  res.status(201).json(updatedPost);
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Post found with the given id.");

  await PostMessage.findByIdAndRemove(id);

  res.status(201).json({ message: "Post deleted successfully" });
};

const likePost = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) return res.json({ message: "Sign In Required" });


  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Post found with the given id.");

  const post = await PostMessage.findById(id);


  const index = post.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    post.likes.push(req.userId);
  } else {
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });


  res.status(201).json(updatedPost);
};

module.exports = { getPosts, createPost, updatePost, deletePost, likePost };
