import { useSelector } from 'react-redux';
import { IGeneralMessage } from 'src/types/global';
import { IUser } from './types';
import {
  usersErrorSelector,
  usersLoadingSelector,
  userSelectorById
} from './selectors';

export const useSelectUserById: (id: number) => IUser = (id: number) => {
  return useSelector(userSelectorById(id));
};

export const useSelectAlbumsLoading: () => boolean = () => {
  return useSelector(usersLoadingSelector);
};

export const useSelectAlbumsError: () => IGeneralMessage = () => {
  return useSelector(usersErrorSelector);
};
