import * as types from '../constants/actionTypes';

const defaultState = {
  post: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_POST_ING:
      return {
        ...state,
        isFetching: true,
      };
    case types.GET_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataSuccess: true,
        post: action.payload,
      };
    case types.GET_POST_FAIL:
      return {
        ...state,
        isFetching: false,
        dataSuccess: false,
        error: true,
      };
    default:
      return state;
  }
};
