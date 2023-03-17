import {
  GET_PHOTOS_FAILURE,
  GET_PHOTOS_LOADED,
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS
} from './actionTypes';
import {
  GetPhotosFailureType,
  GetPhotosLoadedType,
  GetPhotosRequestType,
  GetPhotosSuccessType,
  IPhotosFailurePayload,
  IPhotosRequestPayload,
  IPhotosSuccessPayload
} from './types';

export const getPhotosRequest = (
  payload: IPhotosRequestPayload
): GetPhotosRequestType => ({
  type: GET_PHOTOS_REQUEST,
  payload
});

export const getPhotosSuccess = (
  payload: IPhotosSuccessPayload
): GetPhotosSuccessType => ({
  type: GET_PHOTOS_SUCCESS,
  payload
});

export const getPhotosFailure = (
  payload: IPhotosFailurePayload
): GetPhotosFailureType => ({
  type: GET_PHOTOS_FAILURE,
  payload
});

export const getPhotosLoaded = (): GetPhotosLoadedType => ({
  type: GET_PHOTOS_LOADED
});
