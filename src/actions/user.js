import { AsyncStorage, PermissionsAndroid } from 'react-native';
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

export const getPositionUser = () => (dispatch) => {
  // eslint-disable-next-line
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
      const { coord } = position.coords;
      dispatch({
        type: types.GET_POSITION_SUCCESS,
        location: coord,
      });
    },
    () => {
      try {
        PermissionsAndroid.request('android.permission.ACCESS_FINE_LOCATION', {
          title: 'Để cho app hỗ trợ bạn',
          message: 'Chúng tôi cần bạn cung cấp vị trí',
        });
      } catch (error) {
        console.log(error);
      }
      dispatch({
        type: types.GET_POSITION_ERRROR,
        location: null,
      });
    },
  );
};
