import { SagaIterator } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { getUsersWatcher } from './getUsers/watcher';

export function* usersRootSaga(): SagaIterator {
  yield fork(getUsersWatcher);
}
