import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import useStyle from "./style";
import { createPost, updatePost } from "../../actions/posts";

const Forms = ({ currentId, setCurrentId }) => {
  const post = useSelector((state) =>
    currentId !== null ? state.posts.find((x) => x._id === currentId) : null
  );

  const user = JSON.parse(localStorage.getItem("profile"));

  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const classess = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
    console.log("postData", post);
  }, [post]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentId === null) {
      try {
        dispatch(createPost({ ...postData, name: user.result.name }));
      } catch (error) {
        console.log("form handle submit", error);
      }
      clearForm();
    } else
      dispatch(updatePost(currentId, { ...postData, name: user.result.name }));
  };

  const clearForm = () => {
    setPostData({
      title: "",
      message: "",
      tags: [],
      selectedFile: "",
    });
    setCurrentId(null);
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classess.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like others memory
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classess.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classess.form} ${classess.root}`}
        onSubmit={(event) => handleSubmit(event)}
      >
        <Typography variant="h6">
          {!currentId ? "Creating A Memory" : "Editing a Memory"}
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(event) =>
            setPostData({ ...postData, title: event.target.value })
          }
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(event) =>
            setPostData({ ...postData, message: event.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(event) =>
            setPostData({ ...postData, tags: event.target.value.split(",") })
          }
        />
        <div className={classess.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classess.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clearForm}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Forms;
