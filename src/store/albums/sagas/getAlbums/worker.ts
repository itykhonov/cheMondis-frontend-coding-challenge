import { GetAlbumsRequestType } from '../../types';
import { SagaIterator } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import {
  getAlbumsFailure,
  getAlbumsLoaded,
  getAlbumsSuccess
} from '../../actions';
import { getAlbums } from 'src/services/api';
import { IAlbum } from 'src/store/albums/types';
import { getAlbumsIdsToRequest } from '../../selectors';
import { getUsersRequest } from 'src/store/users/actions';
import { albumsCount } from 'src/mock/options';

export function* getAlbumsWorker({
  payload: { ids }
}: GetAlbumsRequestType): SagaIterator {
  const idsToRequest = yield select(getAlbumsIdsToRequest(ids));
  if (idsToRequest.length) {
    try {
      const result = yield call(getAlbums, idsToRequest);
      if (result) {
        const albums = result.map((el: { data: IAlbum }) => el.data);
        const userIds: number[] = albums.map((album: IAlbum) => album.userId);
        yield put(getUsersRequest({ ids: [...new Set(userIds)] }));
        yield put(
          getAlbumsSuccess({
            data: {
              albums: albums.reduce(
                (acc: Record<string, IAlbum>, next: IAlbum) => {
                  acc[next.id] = next;
                  return acc;
                },
                {}
              )
            },
            totalCount: albumsCount
          })
        );
      } else {
        yield put(
          getAlbumsFailure({
            error: { message: 'No results ALBUMS' }
          })
        );
      }
    } catch (error: unknown) {
      yield put(getAlbumsFailure({ error: error as { message: string } }));
    }
  } else {
    yield put(getAlbumsLoaded());
  }
}
