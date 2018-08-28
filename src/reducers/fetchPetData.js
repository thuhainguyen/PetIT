import * as types from '../constants/actionTypes';

const defaultState = {
  dataPet: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_PET_ING:
      return {
        ...state,
        isPetFetching: true,
      };
    case types.GET_PET_SUCCESS:
      return {
        ...state,
        isPetFetching: false,
        dataPet: action.dataPet,
      };
    case types.GET_PET_FAIL:
      return {
        ...state,
        isPettFetching: false,
        pettError: true,
      };
    default:
      return state;
  }
};
