import React, { FC, useEffect } from 'react';
import { useStyles } from 'src/styles';
import {
  useGetAlbums,
  useSelectAlbumsLoading,
  useSelectAlbumsCurrentPage,
  useSelectAlbumsTotalCount,
  useSelectAlbumsLimit,
  useSelectPagesCount,
  useSelectAlbumsIds
} from 'src/store/albums/hooks';
import { Album } from './album';
import { useSearchParams } from 'react-router-dom';
import classnames from 'classnames';
import { getIdsFromLimit } from 'src/helpers';
import { SelectComponent } from 'src/components/select';
import { options } from 'src/mock/options';
import { Pagination } from 'src/components/pagination';

export const AlbumsPage: FC = () => {
  const styles = useStyles();
  const albumIds = useSelectAlbumsIds();
  const getAlbums = useGetAlbums();
  const totalCount = useSelectAlbumsTotalCount();
  const loading = useSelectAlbumsLoading();
  const currentPage = useSelectAlbumsCurrentPage();
  const albumsLimit = useSelectAlbumsLimit();
  const pagesCount = useSelectPagesCount();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!albumsLimit || !currentPage) {
      searchParams.set(
        'albums-limit',
        albumsLimit > 0 ? albumsLimit.toString() : '20'
      );
      searchParams.set('page', currentPage > 0 ? currentPage.toString() : '1');
      setSearchParams(searchParams);
    } else {
      getAlbums(getIdsFromLimit(albumsLimit, currentPage));
    }
  }, [albumsLimit, currentPage, getAlbums, setSearchParams, searchParams]);

  const handlerPageClick = ({ selected }: { selected: number }) => {
    searchParams.set('page', (selected + 1).toString());
    setSearchParams(searchParams);
  };

  const handlerLimitChange = (albumsLimit: number) => {
    searchParams.set('albums-limit', albumsLimit.toString());
    searchParams.set('page', '1');
    setSearchParams(searchParams);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Albums</h1>
        <div className={styles.countHolder}>
          <label>Items per page</label>
          <SelectComponent
            value={albumsLimit}
            options={options}
            setValue={handlerLimitChange}
          />
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.resultsHolder}>
          {!loading && albumIds && albumIds.length > 0 && (
            <ul className={styles.resultsContainer}>
              {albumIds.map((id) => (
                <Album key={id} albumId={id} />
              ))}
            </ul>
          )}
          {loading && <div className={styles.loading}>Loading ...</div>}
        </div>

        {!loading && albumIds && albumIds.length === 0 && totalCount > 0 && (
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
    </div>
  );
};
