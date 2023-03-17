import {
  GET_ALBUMS_FAILURE,
  GET_ALBUMS_LOADED,
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS
} from './actionTypes';

import { IAlbumsState, AlbumsActionsTypes } from './types';

const initialState: IAlbumsState = {
  loading: false,
  error: '',
  data: {
    albums: {}
  },
  totalCount: 0
};

export default (
  state = initialState,
  action: AlbumsActionsTypes
): IAlbumsState => {
  switch (action.type) {
    case GET_ALBUMS_REQUEST:
      return {
        ...state,
        error: '',
        loading: true
      };
    case GET_ALBUMS_SUCCESS:
      return {
        ...state,
        data: {
          albums: {
            ...state.data.albums,
            ...action.payload.data.albums
          }
        },
        totalCount: action.payload.totalCount,
        loading: false
      };
    case GET_ALBUMS_FAILURE:
      return {
        ...state,
        error: action.payload.error.message
      };
    case GET_ALBUMS_LOADED:
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
