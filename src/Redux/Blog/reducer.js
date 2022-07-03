import * as types from "./actionTypes";

const initialState = {
  blogs: [],
  currentBlog: {},
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_BLOG_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.FETCH_BLOG_SUCCESS: {
      return {
        ...state,
        blogs: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.FETCH_BLOG_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.FETCH_SINGLE_BOOK_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.FETCH_SINGLE_BOOK_SUCCESS: {
      return {
        ...state,
        currentBlog: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.FETCH_SINGLE_BOOK_FAILURE: {
      return {
        ...state,
        isLaoding: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
