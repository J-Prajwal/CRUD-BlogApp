import axios from "axios";
import * as types from "./actionTypes";

export const fetchBlogRequest = (payload) => {
  return {
    type: types.FETCH_BLOG_REQUEST,
    payload,
  };
};

export const fetchBlogSuccess = (payload) => {
  return {
    type: types.FETCH_BLOG_SUCCESS,
    payload,
  };
};

export const fetchBlogFailure = (payload) => {
  return {
    type: types.FETCH_BLOG_FAILURE,
    payload,
  };
};

export const fetchBlogPost = (payload) => (dispatch) => {
  dispatch(fetchBlogRequest());
  axios
    .get("http://localhost:8080/blogs")
    .then((r) => dispatch(fetchBlogSuccess(r.data)))
    .catch((e) => dispatch(fetchBlogFailure(e.data)));
};

export const fetchSingleBlogPostRequest = () => {
  return { type: types.FETCH_SINGLE_BOOK_REQUEST };
};

export const fetchSingleBlogPostSuccess = (payload) => {
  return {
    type: types.FETCH_SINGLE_BOOK_SUCCESS,
    payload,
  };
};

export const fetchSingleBlogPostFailure = () => {
  return { type: types.FETCH_SINGLE_BOOK_FAILURE };
};

export const fetchSingleBlogPost = (payload) => (dispatch) => {
  dispatch(fetchSingleBlogPostRequest());
  axios
    .get(`/blogs/${payload}`)
    .then((r) => {
      dispatch(fetchSingleBlogPostSuccess(r.data));
      console.log(r.data);
    })
    .catch((e) => {
      dispatch(fetchSingleBlogPostFailure());
    });
};

export const createBlogPostRequest = () => {
  return { type: types.CREATE_BLOG_POST_REQUEST };
};

export const createBlogPostSuccess = (payload) => {
  return { type: types.CREATE_BLOG_POST_SUCCESS, payload };
};

export const createBlogPostFailure = () => {
  return { type: types.CREATE_BLOG_POST_FAILURE };
};

export const createBlogPost = (payload) => (dispatch) => {
  dispatch(createBlogPostRequest());
  axios
    .post("/blogs", payload)
    .then((r) => {
      dispatch(createBlogPostSuccess(r.data));
    })
    .catch((e) => {
      dispatch(createBlogPostFailure());
    });
};

export const updateBlogPostRequest = () => {
  return { type: types.UPDATE_BLOG_POST_REQUEST };
};

export const updateBlogPostSuccess = (payload) => {
  return { type: types.UPDATE_BLOG_POST_SUCCESS, payload: payload };
};

export const updateBlogPostFailure = () => {
  return { type: types.UPDATE_BLOG_POST_FAILURE };
};

export const updateBlogPost = (payload) => (dispatch) => {
  dispatch(updateBlogPostRequest());
  axios
    .patch(`/blogs/${payload.id}`, payload)
    .then((res) => {
      dispatch(updateBlogPostSuccess(res.data));
    })
    .catch((err) => {
      dispatch(updateBlogPostFailure(err.data));
    });
};
