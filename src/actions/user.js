import { AsyncStorage } from 'react-native';
import firebase from 'react-native-firebase';
import * as types from '../constants/actionTypes';

export const setUser = (user: Object) => {
  AsyncStorage.setItem('user', JSON.stringify(user));
  return {
    type: types.SET_USER,
    user,
  };
};

export const setUserDatabase = (user) => ({
  type: types.SET_USER_DATABASE,
  payload: user,
});

// const getUser = () => ({
//   type: types.GET_USER_ING,
// });
// const getUserSuccess = (data) => ({
//   type: types.GET_USER_SUCCESS,
//   payload: data,
// });
// const getUserFail = () => ({
//   type: types.GET_USER_FAIL,
// });

export const getUserOther = async (userId) => {
  try {
    const child = firebase
      .database()
      .ref('/user')
      .child(userId);
    const item = await child.once('value');
    return item.val();
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getPositionUser = () => {
  // eslint-disable-next-line
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
      const { coord } = position.coords;
      return {
        type: 'success',
        data: coord,
      };
    },
    (error) => ({
      type: 'error',
      data: error,
    }),
  );
};
