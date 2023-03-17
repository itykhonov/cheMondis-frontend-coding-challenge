import { combineReducers } from 'redux';
import albumsReducer from './albums/reducer';
import usersReducer from './users/reducer';
import photosReducer from './photos/reducer';

const rootReducer = combineReducers({
  users: usersReducer,
  albums: albumsReducer,
  photos: photosReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
