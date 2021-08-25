import React from 'react';
import { useSelector } from 'react-redux'; //It is a hook, Used for accessing redux state data
import { Grid, CircularProgress } from '@material-ui/core';

import Post from './post/Post';
import useStyle from './style';

const Posts = ({setCurrentId})=>{
    const classess = useStyle();
    const posts = useSelector((state) => { //we get access to state which is the global state
        return state.posts;
    });
    

    return (
        (posts.length===0) ? 
        <CircularProgress /> 
        :
        <Grid className={classess.mainContainer} container alignItems="stretch" spacing="3">
            {posts.map((x) => 
                <Grid key={x._id} item xs={12} sm={6}>
                    <Post post={x} setCurrentId={setCurrentId} />
                 </Grid>
            )}
        </Grid>
    );
}

export default Posts;