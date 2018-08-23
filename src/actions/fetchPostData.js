import firebase from 'react-native-firebase';
import * as types from '../constants/actionTypes';
import { randomId } from '../utilities/random';
import { getUserOther } from './user';

const getPost = () => ({
  type: types.GET_POST_ING,
});
const getPostSuccess = (data) => ({
  type: types.GET_POST_SUCCESS,
  payload: data,
});
const getPostFail = () => ({
  type: types.GET_POST_FAIL,
});

const getDataPost = () => (dispatch) => {
  dispatch(getPost());
  try {
    let arrPost = [];
    firebase
      .database()
      .ref('/post')
      .on('value', async (snapshot) => {
        const arrKey = Object.keys(snapshot.val());
        await arrKey.forEach(async (item) => {
          const key = randomId(25);
          const tmp = snapshot.val()[item];
          tmp.key = key;
          const userItem = await getUserOther(tmp.userId);
          tmp.userItem = userItem;
          arrPost = [...arrPost, tmp];
          if (arrPost.length === arrKey.length) {
            dispatch(getPostSuccess(arrPost));
          }
        });
      });
  } catch (error) {
    console.log(error);
    dispatch(getPostFail());
  }
};

export default getDataPost;
