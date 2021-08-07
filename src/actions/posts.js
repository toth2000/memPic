import * as api from "../api"; // importing all files from api folder
import * as actionTypes from "../constants/actionTypes";
//Actions Creators
export const getPosts = () => async (dispatch) => {
  //declaring it async according to redux thunk

  try {
    const { data } = await api.fetchPosts();
    const action = { type: actionTypes.FETCH_ALL, payload: data }; //payload is the data that contains all our post
    dispatch(action); //Redux thunk statement equivalent to return action;
  } catch (err) {
    console.log(err);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    const action = { type: actionTypes.CREATE, payload: data };
    dispatch(action);
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    const action = { type: actionTypes.UPDATE, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    const action = { type: actionTypes.DELETE, payload: id };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    const action = { type: actionTypes.LIKE, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
