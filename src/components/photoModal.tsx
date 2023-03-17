import React, { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelectAlbumById, useSelectAlbumId } from 'src/store/albums/hooks';
import { useSelectPhotoById, useSelectPhotoId } from 'src/store/photos/hooks';
import { useSelectUserById } from 'src/store/users/hooks';
import { useStyles } from 'src/styles';
import { ERoutes } from 'src/types/enums';

export const PhotoModal: FC = () => {
  const albumId = useSelectAlbumId();
  const photoId = useSelectPhotoId();
  const album = useSelectAlbumById(albumId);
  const photo = useSelectPhotoById(photoId);
  const user = useSelectUserById(album?.userId);
  const styles = useStyles();
  const location = useLocation();

  if (!photo || !album || !user) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <NavLink to={`${ERoutes.albums}/${albumId}/photos${location.search}`}>
        Close Modal
      </NavLink>
      <div className={styles.modalHolder}>
        <div className={styles.modalImageHolder}>
          <img src={photo.url} alt="photo image" />
        </div>
        <dl>
          <dt>Photo title:</dt>
          <dd>{photo.title}</dd>
          <dt>Album title:</dt>
          <dd>{album.title}</dd>
          <dt>Album owner:</dt>
          <dd>{user.username}</dd>
        </dl>
      </div>
    </div>
  );
};
