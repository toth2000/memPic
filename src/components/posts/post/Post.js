import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import useStyle from "./style";
import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const classess = useStyle();

  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <Card className={classess.card}>
      <CardMedia
        className={classess.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classess.overlay}>
        <Typography variant="h6"> {post.name} </Typography>
        <Typography variant="body2">
          {" "}
          {moment(post.createdAt).fromNow()}{" "}
        </Typography>
      </div>
      {user?.result?._id === post.creator ||
      user?.result?.googleId === post.creator ? (
        <div className={classess.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => {
              setCurrentId(post._id);
              console.log(post._id);
            }}
          >
            <img
              src="https://img.icons8.com/color/32/000000/connection-status-off--v1.png"
              alt="moreIcon"
            />
          </Button>
        </div>
      ) : null}
      <div className={classess.details}>
        <Typography variant="body2" color="textSecondary">
          {" "}
          {post.tags.map((tag) => `#${tag} `)}{" "}
        </Typography>
      </div>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {" "}
          {post.title}{" "}
        </Typography>
        <Typography variant="body3" color="textSecondary" component="p">
          {" "}
          {post.message}{" "}
        </Typography>
      </CardContent>
      <Button
        size="small"
        color="primary"
        onClick={() => {
          dispatch(likePost(post._id));
        }}
        disabled={!user}
      >
        <img
          src="https://img.icons8.com/dotty/24/000000/facebook-like.png"
          alt="likeIcon"
        />
        {`${post.likes.length} likes`}
      </Button>
      {user?.result?.googleId === post?.creator ||
      user?.result?._id === post?.creator ? (
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(deletePost(post._id));
          }}
        >
          <img
            src="https://img.icons8.com/ios-filled/24/fa314a/delete-forever.png"
            alt="DeleteIcon"
          />
          Delete
        </Button>
      ) : null}
    </Card>
  );
};

export default Post;
