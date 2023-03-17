import React, { FC } from 'react';
import { useStyles } from 'src/styles';
import { ERoutes } from '../../types/enums';
import { NavLink } from 'react-router-dom';
import { useSelectPhotoById } from 'src/store/photos/hooks';
import { useLocation } from 'react-router';

interface IPhotoProps {
  photoId: number;
  albumId: number;
}

export const Photo: FC<IPhotoProps> = ({ photoId, albumId }: IPhotoProps) => {
  const photo = useSelectPhotoById(photoId);
  const styles = useStyles();
  const location = useLocation();

  if (!photo) {
    return null;
  }

  return (
    <li className={styles.resultItem}>
      <NavLink
        to={`${ERoutes.albums}/${albumId}/photos/${photo.id}${location.search}`}
      >
        <img src={photo.thumbnailUrl} alt="photo image" />
        <h2>{photo.title}</h2>
      </NavLink>
    </li>
  );
};
