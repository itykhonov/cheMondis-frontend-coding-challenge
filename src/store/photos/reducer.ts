import {
  GET_PHOTOS_FAILURE,
  GET_PHOTOS_LOADED,
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS
} from './actionTypes';

import { IPhotosState, PhotosActionsTypes } from './types';

const initialState: IPhotosState = {
  loading: false,
  error: '',
  data: {
    photos: {}
  },
  totalCount: 0
};

export default (
  state = initialState,
  action: PhotosActionsTypes
): IPhotosState => {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return {
        ...state,
        error: '',
        loading: true
      };
    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        data: {
          photos: {
            ...state.data.photos,
            ...action.payload.data.photos
          }
        },
        totalCount: action.payload.totalCount,
        loading: false
      };
    case GET_PHOTOS_FAILURE:
      return {
        ...state,
        error: action.payload.error.message
      };
    case GET_PHOTOS_LOADED:
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
