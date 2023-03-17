import { IGeneralMessage, IGeneralMessageResponse } from 'src/types/global';
import {
  GET_PHOTOS_FAILURE,
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_LOADED
} from './actionTypes';

export interface IPhoto {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IPhotos {
  photos: Record<string, IPhoto>;
}

export interface IPhotosState {
  data: IPhotos;
  loading: boolean;
  error: IGeneralMessage;
  totalCount: number;
}

export interface IPhotosRequestPayload {
  ids: number[];
}

export interface IPhotosSuccessPayload {
  data: IPhotos;
  totalCount: number;
}

export interface IPhotosFailurePayload {
  error: IGeneralMessageResponse;
}

export type GetPhotosRequestType = {
  type: typeof GET_PHOTOS_REQUEST;
  payload: IPhotosRequestPayload;
};

export type GetPhotosSuccessType = {
  type: typeof GET_PHOTOS_SUCCESS;
  payload: IPhotosSuccessPayload;
};

export type GetPhotosFailureType = {
  type: typeof GET_PHOTOS_FAILURE;
  payload: IPhotosFailurePayload;
};

export type GetPhotosLoadedType = {
  type: typeof GET_PHOTOS_LOADED;
};

export type PhotosActionsTypes =
  | GetPhotosRequestType
  | GetPhotosSuccessType
  | GetPhotosFailureType
  | GetPhotosLoadedType;
