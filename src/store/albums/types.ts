import { IGeneralMessage, IGeneralMessageResponse } from 'src/types/global';
import {
  GET_ALBUMS_FAILURE,
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_LOADED
} from './actionTypes';

export interface IAlbum {
  id: number;
  userId: number;
  title: string;
}

export interface IAlbums {
  albums: Record<string, IAlbum>;
}

export interface IAlbumsState {
  data: IAlbums;
  loading: boolean;
  error: IGeneralMessage;
  totalCount: number;
}

export interface IAlbumsRequestPayload {
  ids: number[];
}

export interface IAlbumsSuccessPayload {
  data: IAlbums;
  totalCount: number;
}

export interface IAlbumsFailurePayload {
  error: IGeneralMessageResponse;
}

export type GetAlbumsRequestType = {
  type: typeof GET_ALBUMS_REQUEST;
  payload: IAlbumsRequestPayload;
};

export type GetAlbumsSuccessType = {
  type: typeof GET_ALBUMS_SUCCESS;
  payload: IAlbumsSuccessPayload;
};

export type GetAlbumsFailureType = {
  type: typeof GET_ALBUMS_FAILURE;
  payload: IAlbumsFailurePayload;
};

export type GetAlbumsLoadedType = {
  type: typeof GET_ALBUMS_LOADED;
};

export type AlbumsActionsTypes =
  | GetAlbumsRequestType
  | GetAlbumsSuccessType
  | GetAlbumsFailureType
  | GetAlbumsLoadedType;
