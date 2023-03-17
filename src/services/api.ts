import axios from 'axios';
import { IAlbum } from 'src/store/albums/types';
import { IPhoto } from 'src/store/photos/types';
import { IUser } from 'src/store/users/types';

export const getAlbum = (id: number): Promise<IAlbum> => {
  return axios.get(`${process.env.REACT_APP_API}/albums/${id}`);
};

export const getAlbums = (albumIds: number[]) =>
  Promise.all(
    albumIds.reduce((acc: Promise<IAlbum>[], next: number) => {
      acc.push(getAlbum(next));
      return acc;
    }, [])
  );

export const getUser = (id: number): Promise<IUser> => {
  return axios.get(`${process.env.REACT_APP_API}/users/${id}`);
};

export const getUsers = (albumIds: number[]) =>
  Promise.all(
    albumIds.reduce((acc: Promise<IUser>[], next: number) => {
      acc.push(getUser(next));
      return acc;
    }, [])
  );

export const getPhoto = (id: number): Promise<IPhoto> => {
  return axios.get(`${process.env.REACT_APP_API}/photos/${id}`);
};

export const getPhotos = (photoIds: number[]) =>
  Promise.all(
    photoIds.reduce((acc: Promise<IPhoto>[], next: number) => {
      acc.push(getPhoto(next));
      return acc;
    }, [])
  );
