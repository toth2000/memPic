import React from 'react';
import { useSelector } from 'react-redux'; //It is a hook, Used for accessing redux state data

import Post from '../post/Post';
import useStyle from './style';

const Posts = ()=>{
    const classess = useStyle();
    const posts = useSelector((state) => { //we get access to state which is the global state
        return state.posts;
    });

    console.log(posts);

    return (
        <>
        <h1>Posts</h1>
        <Post />
        <Post />
        <Post />
        </>
    );
}

export default Posts;