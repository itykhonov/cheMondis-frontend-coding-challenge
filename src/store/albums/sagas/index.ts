import { SagaIterator } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { getAlbumsWatcher } from './getAlbums/watcher';

export function* albumsRootSaga(): SagaIterator {
  yield fork(getAlbumsWatcher);
}
