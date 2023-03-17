import { GetUsersRequestType } from '../../types';
import { SagaIterator } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import {
  getUsersFailure,
  getUsersLoaded,
  getUsersSuccess
} from '../../actions';
import { getUsers } from 'src/services/api';
import { IUser } from 'src/store/users/types';
import { getUsersIdsToRequest } from '../../selectors';

export function* getUsersWorker({
  payload: { ids }
}: GetUsersRequestType): SagaIterator {
  const idsToRequest = yield select(getUsersIdsToRequest(ids));
  if (idsToRequest.length) {
    try {
      const result = yield call(getUsers, idsToRequest);
      if (result) {
        const users = result.map((el: { data: IUser }) => el.data);
        yield put(
          getUsersSuccess({
            data: {
              users: users.reduce(
                (acc: Record<string, IUser>, { id, username }: IUser) => {
                  acc[id] = {
                    id,
                    username,
                    color: ((Math.random() * 0xffffff) << 0)
                      .toString(16)
                      .padStart(6, '0')
                  };
                  return acc;
                },
                {}
              )
            }
          })
        );
      } else {
        yield put(
          getUsersFailure({
            error: { message: 'No results USERS' }
          })
        );
      }
    } catch (error: unknown) {
      yield put(getUsersFailure({ error: error as { message: string } }));
    }
  } else {
    yield put(getUsersLoaded());
  }
}
