import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

const getErrorPhotos = (state: AppState) => state.photos.error;
const getLoadingPhotos = (state: AppState) => state.photos.loading;
const getPhotosTotalCount = (state: AppState) => state.photos.totalCount;
const getPhotosData = (state: AppState) => state.photos.data.photos;

export const photosErrorSelector = createSelector(
  getErrorPhotos,
  (error) => error
);

export const photosLoadingSelector = createSelector(
  getLoadingPhotos,
  (loading) => loading
);

export const getPhotosTotalCountSelector = createSelector(
  getPhotosTotalCount,
  (totalCount) => totalCount
);

export const getPhotosIdsToRequest = (ids: number[]) =>
  createSelector(getPhotosData, (photosData) =>
    ids.filter((id) => !photosData[id])
  );

export const photoSelectorById = (id: number) =>
  createSelector(getPhotosData, (photosData) => photosData[id]);
