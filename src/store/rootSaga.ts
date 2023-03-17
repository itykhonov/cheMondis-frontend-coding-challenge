import { all, fork } from 'redux-saga/effects';
import { albumsRootSaga } from './albums/sagas';
import { usersRootSaga } from './users/sagas';
import { photosRootSaga } from './photos/sagas';

export function* rootSaga(): Iterator<unknown> {
  yield all([fork(albumsRootSaga), fork(usersRootSaga), fork(photosRootSaga)]);
}
