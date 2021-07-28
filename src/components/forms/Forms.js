import React, {useState} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64'; 
import { useDispatch } from 'react-redux';

import useStyle from './style';
import {createPost} from '../../actions/posts';

const Forms = ()=>{

    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    });
    const classess = useStyle();
    const dispatch = useDispatch();

    const handleSubmit = (event)=>{
        console.log('Button Pressed');
        event.preventDefault();
        dispatch(createPost(postData));
        console.log(postData);
    }

    const clearForm = ()=>{

    }

    return (
        <Paper className={classess.paper}>
            <form autoComplete="off" noValidate className={`${classess.form} ${classess.root}`} onSubmit={(event)=>handleSubmit(event)}>
            <Typography variant="h6">Creating A Memory</Typography>
            <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(event) => setPostData({ ...postData, creator: event.target.value})} />
            <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(event) => setPostData({ ...postData, title: event.target.value})} />
            <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(event) => setPostData({ ...postData, message: event.target.value})} />
            <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(event) => setPostData({ ...postData, tags: event.target.value})} />
            <div className={classess.fileInput}>
                <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}/>
            </div>
            <Button className={classess.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
                Submit
            </Button>
            <Button variant="contained" color="secondary" size="small" onClick={clearForm} fullWidth>
                Clear
            </Button>
            </form>
        </Paper>
    );
}

export default Forms;