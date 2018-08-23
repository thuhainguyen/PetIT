import firebase from 'react-native-firebase';
import * as types from '../constants/actionTypes';

const getPet = () => ({
  type: types.GET_PET_ING,
});
const getPetSuccess = (data) => ({
  type: types.GET_PET_SUCCESS,
  dataPet: data,
});
const getPetFail = () => ({
  type: types.GET_PET_FAIL,
});

const getDataPet = (userId) => (dispatch) => {
  dispatch(getPet());
  try {
    firebase
      .database()
      .ref('pet')
      .orderByChild('userId')
      .equalTo(userId)
      .on('value', (snapshot) => {
        console.log(snapshot.val());
        dispatch(getPetSuccess(snapshot.val()));
      });
  } catch (error) {
    console.log(error);
    dispatch(getPetFail());
  }
};

export default getDataPet;
