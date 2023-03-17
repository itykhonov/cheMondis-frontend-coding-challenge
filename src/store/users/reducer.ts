import {
  GET_USERS_FAILURE,
  GET_USERS_LOADED,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS
} from './actionTypes';

import { IUsersState, UsersActionsTypes } from './types';

const initialState: IUsersState = {
  loading: false,
  error: '',
  data: {
    users: {}
  }
};

export default (
  state = initialState,
  action: UsersActionsTypes
): IUsersState => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        error: '',
        loading: true
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        data: {
          users: {
            ...state.data.users,
            ...action.payload.data.users
          }
        },
        loading: false
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        error: action.payload.error.message
      };
    case GET_USERS_LOADED:
      return {
        ...state,
        loading: false
      };
    default:
      return {
        ...state
      };
  }
};
