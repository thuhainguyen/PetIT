import { createStackNavigator } from 'react-navigation';
import {
  MedicalScreen,
  PetDetail,
  Diary,
  LichChungNgua,
  LichTayGiun,
  Album,
  AddDiary,
} from '../containers/Medical';

export default createStackNavigator(
  {
    MedicalScreen: {
      screen: MedicalScreen,
    },
    PetDetail: {
      screen: PetDetail,
    },
    Diary: {
      screen: Diary,
    },
    LichChungNgua: {
      screen: LichChungNgua,
    },
    LichTayGiun: {
      screen: LichTayGiun,
    },
    Album: {
      screen: Album,
    },
    AddDiary: {
      screen: AddDiary,
    },
  },
  {
    initialRouteName: 'MedicalScreen',
    headerMode: 'none',
  },
);
