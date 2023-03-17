import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { getIdsFromLimit } from 'src/helpers';
import { IGeneralMessage } from 'src/types/global';
import { IAlbum } from './types';
import { getAlbumsRequest } from './actions';
import {
  getAlbumsTotalCountSelector,
  albumsErrorSelector,
  albumsLoadingSelector,
  albumSelectorById
} from './selectors';

export const useSelectAlbumById: (id: number) => IAlbum = (id: number) => {
  return useSelector(albumSelectorById(id));
};

export const useSelectAlbumsLoading: () => boolean = () => {
  return useSelector(albumsLoadingSelector);
};

export const useSelectAlbumsError: () => IGeneralMessage = () => {
  return useSelector(albumsErrorSelector);
};

export const useSelectAlbumsCurrentPage: () => number = () => {
  const query = useQuery();
  return Number(query.get('page'));
};

export const useSelectAlbumsTotalCount: () => number = () => {
  return useSelector(getAlbumsTotalCountSelector);
};

export const useGetAlbums: () => (ids: number[]) => void = () => {
  const dispatch = useDispatch();
  return useCallback(
    (ids: number[]) => {
      dispatch(getAlbumsRequest({ ids }));
    },
    [dispatch]
  );
};

export const useSelectAlbumsLimit: () => number = () => {
  const query = useQuery();
  return Number(query.get('albums-limit'));
};

export const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

export const useSelectPagesCount: () => number = () => {
  const albumsLimit = useSelectAlbumsLimit();
  const totalCount = useSelectAlbumsTotalCount();

  return Math.ceil(totalCount / albumsLimit);
};

export const useSelectAlbumsIds = (): number[] => {
  const albumsLimit = useSelectAlbumsLimit();
  const page = useSelectAlbumsCurrentPage();

  return getIdsFromLimit(albumsLimit, page);
};

export const useSelectAlbumId: () => number = () => {
  const { albumId } = useParams();
  return Number(albumId);
};
