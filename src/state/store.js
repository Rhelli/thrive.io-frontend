import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {
  userProfileReducer, profileSettingsReducer, propertyReducer,
  flatmatesReducer, authReducer, shortlistReducer,
} from './index';

const rootReducer = combineReducers({
  profileStore: userProfileReducer,
  profileSettingsStore: profileSettingsReducer,
  propertyStore: propertyReducer,
  shortlistStore: shortlistReducer,
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
