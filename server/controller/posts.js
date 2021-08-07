const PostMessage = require('../models/postMessage.js');

const getPosts = async (req, res) => {
    try{
        const postMessage = await PostMessage.find();
        res.status(200).json(postMessage); //Sending res as json
    }catch(error)
    {
        res.status(404).json('Error');
        console.log(error);
    }
};

const createPost = async (req,res) => {
    const post = req.body;
    const newPost  = new PostMessage(post);

    try{
        await newPost.save();
        res.status(201).json(newPost);
    }catch(error){
        res.status(409).json({message: error.message});
    }
}


module.exports = {getPosts, createPost};