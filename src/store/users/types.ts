import { IGeneralMessage, IGeneralMessageResponse } from 'src/types/global';
import {
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_LOADED
} from './actionTypes';

export interface IUser {
  id: number;
  username: number;
  color: string;
}

export interface IUsers {
  users: Record<string, IUser>;
}

export interface IUsersState {
  data: IUsers;
  loading: boolean;
  error: IGeneralMessage;
}

export interface IUsersRequestPayload {
  ids: number[];
}

export interface IUsersSuccessPayload {
  data: IUsers;
}

export interface IUsersFailurePayload {
  error: IGeneralMessageResponse;
}

export type GetUsersRequestType = {
  type: typeof GET_USERS_REQUEST;
  payload: IUsersRequestPayload;
};

export type GetUsersSuccessType = {
  type: typeof GET_USERS_SUCCESS;
  payload: IUsersSuccessPayload;
};

export type GetUsersFailureType = {
  type: typeof GET_USERS_FAILURE;
  payload: IUsersFailurePayload;
};

export type GetUsersLoadedType = {
  type: typeof GET_USERS_LOADED;
};

export type UsersActionsTypes =
  | GetUsersRequestType
  | GetUsersSuccessType
  | GetUsersFailureType
  | GetUsersLoadedType;
