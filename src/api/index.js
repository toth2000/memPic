import axios from "axios";

import { apiUrl } from "../constants/url";

const API = axios.create({ baseURL: apiUrl });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

const apiPostUrl = "/posts";
const apiUserUrl = "/users";

export const fetchPosts = () => {
  return API.get(apiPostUrl);
};

export const createPost = (newPost) => {
  return API.post(apiPostUrl, newPost);
};

export const updatePost = (id, post) => {
  return API.patch(`${apiPostUrl}/${id}`, post);
};

export const deletePost = (id) => {
  return API.delete(`${apiPostUrl}/${id}`);
};

export const likePost = (id) => {
  return API.patch(`${apiPostUrl}/${id}/likePost`);
};

export const signIn = (formData) => {
  return API.post(`${apiUserUrl}/signIn`, formData);
};

export const signUp = (formData) => {
  return API.post(`${apiUserUrl}/signUp`, formData);
};
