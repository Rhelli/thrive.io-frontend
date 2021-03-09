import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {
  navbarReducer, userProfileReducer, profileSettingsReducer, propertyReducer,
  quizReducer, flatmatesReducer, authReducer,
} from './index';

const rootReducer = combineReducers({
  navbarStore: navbarReducer,
  profileStore: userProfileReducer,
  profileSettingsStore: profileSettingsReducer,
  propertyStore: propertyReducer,
  quizStore: quizReducer,
  flatmateStore: flatmatesReducer,
  authStore: authReducer,
});

export default function setupStore(initialState = {}) {
  const middleware = [];

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({ collapsed: true });
    middleware.push(logger);
  }
  middleware.push(thunk);

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware),
  );

  return store;
}
