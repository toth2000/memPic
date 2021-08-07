import * as actionTypes from "../constants/actionTypes";

const reducers = (posts = [], action) => {
  //The state contains posts, which is empty array initially

  switch (action.type) {
    case actionTypes.FETCH_ALL:
      return action.payload;
    case actionTypes.CREATE:
      return [...posts, action.payload];
    case actionTypes.UPDATE:
    case actionTypes.LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case actionTypes.DELETE:
      return posts.filter((x) => x._id !== action.payload);
    default:
      return posts;
  }
};

export default reducers;
