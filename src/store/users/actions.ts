import {
  GET_USERS_FAILURE,
  GET_USERS_LOADED,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS
} from './actionTypes';
import {
  GetUsersFailureType,
  GetUsersLoadedType,
  GetUsersRequestType,
  GetUsersSuccessType,
  IUsersFailurePayload,
  IUsersRequestPayload,
  IUsersSuccessPayload
} from './types';

export const getUsersRequest = (
  payload: IUsersRequestPayload
): GetUsersRequestType => ({
  type: GET_USERS_REQUEST,
  payload
});

export const getUsersSuccess = (
  payload: IUsersSuccessPayload
): GetUsersSuccessType => ({
  type: GET_USERS_SUCCESS,
  payload
});

export const getUsersFailure = (
  payload: IUsersFailurePayload
): GetUsersFailureType => ({
  type: GET_USERS_FAILURE,
  payload
});

export const getUsersLoaded = (): GetUsersLoadedType => ({
  type: GET_USERS_LOADED
});
