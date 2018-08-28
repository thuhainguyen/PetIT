import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import RootNavigator from '../navigators/rootNavigator';
import fetchPostData from './fetchPostData';
import fetchPetData from './fetchPetData';
import user from './user';

const navReducer = createNavigationReducer(RootNavigator);

const rootRecuder = combineReducers({
  navigation: navReducer,
  user,
  fetchPostData,
  fetchPetData,
});

export default rootRecuder;
