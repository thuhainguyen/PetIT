import { AsyncStorage, PermissionsAndroid } from 'react-native';
import firebase from 'react-native-firebase';
import * as types from '../constants/actionTypes';

/* eslint-disable */
export const setUser = (user: Object, isNewUser: boolean = false) => (
  dispatch,
) => {
  AsyncStorage.setItem('user', JSON.stringify(user));
  const ref = firebase
    .database()
    .ref('user')
    .child(user.id);
  if (!isNewUser) {
    ref.update(user, () =>
      dispatch({
        type: types.SET_USER,
        user,
      }),
    );
  } else {
    ref.set(user, () =>
      dispatch({
        type: types.SET_USER,
        user,
      }),
    );
  }
};
/* eslint-enable */
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
      const { coords } = position;
      dispatch({
        type: types.GET_POSITION_SUCCESS,
        dataLocation: {
          latitude: coords.latitude,
          longitude: coords.longitude,
        },
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
        dataLocation: {},
      });
    },
  );
};
