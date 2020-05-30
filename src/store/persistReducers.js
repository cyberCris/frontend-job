/* eslint-disable comma-dangle */
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'githubsearch',
      storage,
      whitelist: ['User'],
    },
    reducers
  );

  return persistedReducer;
};
