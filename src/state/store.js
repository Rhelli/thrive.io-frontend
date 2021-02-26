import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  navbarReducer, profileReducer, profileSettingsReducer, propertyReducer,
  quizReducer, userListReducer
} from './index';

const root = combineReducers({
  navbarStore: navbarReducer,
  profileStore: profileReducer,
  profileSettingsStore: profileSettingsReducer,
  propertyStore: propertyReducer,
  quizStore: quizReducer,
  userListStore: userListReducer
});

const store = createStore(root, applyMiddleware(thunk));

export default store;