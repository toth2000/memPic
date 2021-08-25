import { Container, Grid, Grow } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import Posts from "../posts/Posts";
import Form from "../forms/Forms";
import useStyles from "./style";
import { getPosts } from "../../actions/posts";
import { useDispatch } from "react-redux";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
