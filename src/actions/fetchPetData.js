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
    const pet = {};
    firebase
      .database()
      .ref('pet/dog')
      .orderByChild('userId')
      .equalTo(userId)
      .on('value', (petDog) => {
        if (petDog.val()) {
          const tmpDog = [];
          Object.keys(petDog.val()).forEach((key) => {
            const tmp = petDog.val()[key];
            tmp.key = key;
            tmpDog.push(tmp);
          });
          pet.dog = {
            name: 'Chó',
            data: tmpDog,
          };
        }
        firebase
          .database()
          .ref('pet/cat')
          .orderByChild('userId')
          .equalTo(userId)
          .on('value', (petCat) => {
            if (petCat.val()) {
              const tmpCat = [];
              Object.keys(petCat.val()).forEach((key) => {
                const tmp = petCat.val()[key];
                tmp.key = key;
                tmpCat.push(tmp);
              });
              pet.cat = {
                name: 'Mèo',
                data: tmpCat,
              };
            }
            firebase
              .database()
              .ref('pet/fish')
              .orderByChild('userId')
              .equalTo(userId)
              .on('value', (petFish) => {
                if (petFish.val()) {
                  const tmpFish = [];
                  Object.keys(petFish.val()).forEach((key) => {
                    const tmp = petFish.val()[key];
                    tmp.key = key;
                    tmpFish.push(tmp);
                  });
                  pet.fish = {
                    name: 'Cá',
                    data: tmpFish,
                  };
                }
                dispatch(getPetSuccess(pet));
              });
          });
      });
  } catch (error) {
    console.log(error);
    dispatch(getPetFail());
  }
};

export default getDataPet;
