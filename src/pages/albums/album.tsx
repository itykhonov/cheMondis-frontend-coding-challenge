import React, { FC } from 'react';
import { useStyles } from 'src/styles';
import { ERoutes } from '../../types/enums';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useSelectAlbumById } from 'src/store/albums/hooks';
import { useSelectUserById } from 'src/store/users/hooks';

interface IAlbumProps {
  albumId: number;
}

export const Album: FC<IAlbumProps> = ({ albumId }: IAlbumProps) => {
  const album = useSelectAlbumById(albumId);
  const user = useSelectUserById(album?.userId);
  const styles = useStyles();
  const [searchParams] = useSearchParams();

  if (!album || !user) {
    return null;
  }

  return (
    <li className={styles.resultItem}>
      <NavLink
        to={`${ERoutes.albums}/${
          album.id
        }/photos?albums-limit=${searchParams.get(
          'albums-limit'
        )}&page=${searchParams.get('page')}&photos-page=1&photos-limit=20`}
      >
        <img
          src={`https://via.placeholder.com/150/${user.color}`}
          alt="album image"
        />
        <dl>
          <dt>title:</dt>
          <dd>{album.title}</dd>
          <dt>owner:</dt>
          <dd>{user.username}</dd>
        </dl>
      </NavLink>
    </li>
  );
};
