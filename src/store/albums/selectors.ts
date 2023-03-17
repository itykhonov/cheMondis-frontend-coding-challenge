import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

const getErrorAlbums = (state: AppState) => state.albums.error;
const getLoadingAlbums = (state: AppState) => state.albums.loading;
const getAlbumsTotalCount = (state: AppState) => state.albums.totalCount;
const getAlbumsData = (state: AppState) => state.albums.data.albums;

export const albumsErrorSelector = createSelector(
  getErrorAlbums,
  (error) => error
);

export const albumsLoadingSelector = createSelector(
  getLoadingAlbums,
  (loading) => loading
);

export const getAlbumsTotalCountSelector = createSelector(
  getAlbumsTotalCount,
  (totalCount) => totalCount
);

export const getAlbumsIdsToRequest = (ids: number[]) =>
  createSelector(getAlbumsData, (albumsData) =>
    ids.filter((id) => !albumsData[id])
  );

export const albumSelectorById = (id: number) =>
  createSelector(getAlbumsData, (albumsData) => albumsData[id]);
