import React, { FC, useEffect } from 'react';
import { useStyles } from 'src/styles';
import {
  useGetPhotos,
  useSelectPhotosLoading,
  useSelectPhotosCurrentPage,
  useSelectPhotosTotalCount,
  useSelectPhotosLimit,
  useSelectPhotosPagesCount,
  useSelectPhotosIds
} from 'src/store/photos/hooks';
import { Photo } from './photo';
import classnames from 'classnames';
import { getIdsFromLimit } from 'src/helpers';
import { SelectComponent } from 'src/components/select';
import { options, photosCount } from 'src/mock/options';
import { Pagination } from 'src/components/pagination';
import { useSearchParams } from 'react-router-dom';
import { useSelectAlbumById, useSelectAlbumId } from 'src/store/albums/hooks';
import { useSelectUserById } from 'src/store/users/hooks';
import { NavLink, Outlet } from 'react-router-dom';
import { ERoutes } from 'src/types/enums';

export const PhotosPage: FC = () => {
  const styles = useStyles();
  const photoIds = useSelectPhotosIds();
  const getPhotos = useGetPhotos();
  const totalCount = useSelectPhotosTotalCount();
  const loading = useSelectPhotosLoading();
  const currentPage = useSelectPhotosCurrentPage();
  const photosLimit = useSelectPhotosLimit();
  const pagesCount = useSelectPhotosPagesCount();
  const albumId = useSelectAlbumId();
  const [searchParams, setSearchParams] = useSearchParams();
  const album = useSelectAlbumById(albumId);
  const user = useSelectUserById(album?.userId);

  useEffect(() => {
    if (!photosLimit || !currentPage) {
      searchParams.set(
        'photos-limit',
        photosLimit > 0 ? photosLimit.toString() : '20'
      );
      searchParams.set(
        'photos-page',
        currentPage > 0 ? currentPage.toString() : '1'
      );
      setSearchParams(searchParams);
    } else {
      getPhotos(
        getIdsFromLimit(photosLimit, currentPage, (albumId - 1) * photosCount)
      );
    }
  }, [
    photosLimit,
    currentPage,
    getPhotos,
    searchParams,
    setSearchParams,
    albumId
  ]);

  const handlerPageClick = ({ selected }: { selected: number }) => {
    searchParams.set('photos-page', (selected + 1).toString());
    setSearchParams(searchParams);
  };

  const handlerLimitChange = (photosLimit: number) => {
    searchParams.set('photos-limit', photosLimit.toString() || '20');
    searchParams.set('photos-page', '1');
    setSearchParams(searchParams);
  };

  if (!album || !user) {
    return null;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavLink
          to={`${ERoutes.albums}?page=${searchParams.get(
            'page'
          )}&albums-limit=${searchParams.get('albums-limit')}`}
        >
          Back to albums page
        </NavLink>
        <h1>
          {album.title} - {user.username}
        </h1>
        <div className={styles.countHolder}>
          <label>Items per page</label>
          <SelectComponent
            value={photosLimit}
            options={options}
            setValue={handlerLimitChange}
          />
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.resultsHolder}>
          {!loading && photoIds && photoIds.length > 0 && (
            <ul className={styles.resultsContainer}>
              {photoIds.map((id) => (
                <Photo key={id} photoId={id} albumId={albumId} />
              ))}
            </ul>
          )}
          {loading && <div className={styles.loading}>Loading ...</div>}
        </div>

        {!loading && photoIds && photoIds.length === 0 && totalCount > 0 && (
          <div className={styles.noResults}>No results found</div>
        )}
      </main>
      {pagesCount > 1 && (
        <div className={classnames(styles.paginationHolder, { loading })}>
          <Pagination
            currentPage={currentPage}
            pagesCount={pagesCount}
            handlerPageClick={handlerPageClick}
          />
        </div>
      )}
      <Outlet></Outlet>
    </div>
  );
};
