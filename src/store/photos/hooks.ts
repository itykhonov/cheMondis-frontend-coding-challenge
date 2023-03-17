import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { getIdsFromLimit } from 'src/helpers';
import { IGeneralMessage } from 'src/types/global';
import { IPhoto } from './types';
import { getPhotosRequest } from './actions';
import {
  getPhotosTotalCountSelector,
  photosErrorSelector,
  photosLoadingSelector,
  photoSelectorById
} from './selectors';
import { useSelectAlbumId } from '../albums/hooks';

export const useSelectPhotoById: (id: number) => IPhoto = (id: number) => {
  return useSelector(photoSelectorById(id));
};

export const useSelectPhotosLoading: () => boolean = () => {
  return useSelector(photosLoadingSelector);
};

export const useSelectPhotosError: () => IGeneralMessage = () => {
  return useSelector(photosErrorSelector);
};

export const useSelectPhotosCurrentPage: () => number = () => {
  const query = useQuery();
  return Number(query.get('photos-page'));
};

export const useSelectPhotosTotalCount: () => number = () => {
  return useSelector(getPhotosTotalCountSelector);
};

export const useGetPhotos: () => (ids: number[]) => void = () => {
  const dispatch = useDispatch();
  return useCallback(
    (ids: number[]) => {
      dispatch(getPhotosRequest({ ids }));
    },
    [dispatch]
  );
};

export const useSelectPhotosLimit: () => number = () => {
  const query = useQuery();
  return Number(query.get('photos-limit'));
};

export const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

export const useSelectPhotosPagesCount: () => number = () => {
  const photosLimit = useSelectPhotosLimit();
  const totalCount = useSelectPhotosTotalCount();

  return Math.ceil(totalCount / photosLimit);
};

export const useSelectPhotosIds = (): number[] => {
  const photosLimit = useSelectPhotosLimit();
  const page = useSelectPhotosCurrentPage();
  const albumId = useSelectAlbumId();
  const photosCount = useSelectPhotosTotalCount();

  return getIdsFromLimit(photosLimit, page, (albumId - 1) * photosCount);
};

export const useSelectPhotoId: () => number = () => {
  const { photoId } = useParams();
  return Number(photoId);
};
