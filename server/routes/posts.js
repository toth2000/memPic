const express = require('express');
const {getPosts, createPost} = require('../controller/posts.js');

const router = express.Router(); //Express Router

router.get('/', getPosts);
router.post('/', createPost);

module.exports =  router;