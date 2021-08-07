import axios from "axios";

import { apiPostUrl } from "../constants/url";

export const fetchPosts = () => {
  return axios.get(apiPostUrl);
};

export const createPost = (newPost) => {
  return axios.post(apiPostUrl, newPost);
};

export const updatePost = (id, post) => {
  return axios.patch(`${apiPostUrl}/${id}`, post);
};

export const deletePost = (id) => {
  return axios.delete(`${apiPostUrl}/${id}`);
};

export const likePost = (id) => {
  return axios.patch(`${apiPostUrl}/${id}/likePost`);
};
