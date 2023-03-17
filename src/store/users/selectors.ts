import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

const getErrorUsers = (state: AppState) => state.users.error;
const getLoadingUsers = (state: AppState) => state.users.loading;
const getUsersData = (state: AppState) => state.users.data.users;

export const usersErrorSelector = createSelector(
  getErrorUsers,
  (error) => error
);

export const usersLoadingSelector = createSelector(
  getLoadingUsers,
  (loading) => loading
);

export const usersDataSelector = createSelector(
  getUsersData,
  (usersData) => usersData
);

export const getUsersIdsToRequest = (ids: number[]) =>
  createSelector(getUsersData, (usersData) =>
    ids.filter((id) => !usersData[id])
  );

export const userSelectorById = (id: number) =>
  createSelector(getUsersData, (usersData) => usersData[id]);
