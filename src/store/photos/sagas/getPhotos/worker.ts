import { GetPhotosRequestType } from '../../types';
import { SagaIterator } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import {
  getPhotosFailure,
  getPhotosLoaded,
  getPhotosSuccess
} from '../../actions';
import { getPhotos } from 'src/services/api';
import { IPhoto } from 'src/store/photos/types';
import { getPhotosIdsToRequest } from '../../selectors';
import { photosCount } from 'src/mock/options';
import { getAlbumsRequest } from 'src/store/albums/actions';

export function* getPhotosWorker({
  payload: { ids }
}: GetPhotosRequestType): SagaIterator {
  const idsToRequest = yield select(getPhotosIdsToRequest(ids));
  if (idsToRequest.length) {
    try {
      const result = yield call(getPhotos, idsToRequest);
      if (result) {
        const photos = result.map((el: { data: IPhoto }) => el.data);
        const albumIds: number[] = photos.map((photo: IPhoto) => photo.albumId);
        yield put(getAlbumsRequest({ ids: [...new Set(albumIds)] }));
        yield put(
          getPhotosSuccess({
            data: {
              photos: photos.reduce(
                (acc: Record<string, IPhoto>, next: IPhoto) => {
                  acc[next.id] = next;
                  return acc;
                },
                {}
              )
            },
            totalCount: photosCount
          })
        );
      } else {
        yield put(
          getPhotosFailure({
            error: { message: 'No results PHOTOS' }
          })
        );
      }
    } catch (error: unknown) {
      yield put(getPhotosFailure({ error: error as { message: string } }));
    }
  } else {
    yield put(getPhotosLoaded());
  }
}
