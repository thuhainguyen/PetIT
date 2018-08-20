import * as types from '../constants/actionTypes';

const defaultState = {
  user: {},
  userDatabase: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case types.SET_USER_DATABASE:
      return {
        ...state,
        userDatabase: action.payload,
      };
    case types.GET_USER_ING:
      return {
        ...state,
        isFetching: true,
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataSuccess: true,
        data: action.payload,
      };
    case types.GET_USER_FAIL:
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
