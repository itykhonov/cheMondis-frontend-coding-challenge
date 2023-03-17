import {
  GET_ALBUMS_FAILURE,
  GET_ALBUMS_LOADED,
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS
} from './actionTypes';
import {
  GetAlbumsFailureType,
  GetAlbumsLoadedType,
  GetAlbumsRequestType,
  GetAlbumsSuccessType,
  IAlbumsFailurePayload,
  IAlbumsRequestPayload,
  IAlbumsSuccessPayload
} from './types';

export const getAlbumsRequest = (
  payload: IAlbumsRequestPayload
): GetAlbumsRequestType => ({
  type: GET_ALBUMS_REQUEST,
  payload
});

export const getAlbumsSuccess = (
  payload: IAlbumsSuccessPayload
): GetAlbumsSuccessType => ({
  type: GET_ALBUMS_SUCCESS,
  payload
});

export const getAlbumsFailure = (
  payload: IAlbumsFailurePayload
): GetAlbumsFailureType => ({
  type: GET_ALBUMS_FAILURE,
  payload
});

export const getAlbumsLoaded = (): GetAlbumsLoadedType => ({
  type: GET_ALBUMS_LOADED
});
