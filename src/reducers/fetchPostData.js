import * as types from '../constants/actionTypes';

const defaultState = {
  post: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_POST_ING:
      return {
        ...state,
        isPostFetching: true,
      };
    case types.GET_POST_SUCCESS:
      return {
        ...state,
        isPostFetching: false,
        dataPost: action.dataPost,
      };
    case types.GET_POST_FAIL:
      return {
        ...state,
        isPostFetching: false,
        postError: true,
      };
    default:
      return state;
  }
};
