export enum RoutePaths {
  HOME = '/',
  MAIN = '/main',
  SIGNIN = '/signin',
  SIGNUP = '/signup',
  SEARCH = '/search',
  MOVIECARD = '/moviecard/:id',
  NOTFOUND = '*',
}

export interface User {
  email: string | null;
  token: string | null;
  id: number | null;
}

export interface Action {
  type: string;
  payload: any;
  onError?: (error: string) => void;
}

export const ACTION_TYPE = {
  SET_USER: 'user/setUser',
  DELETE_USER: 'user/removeUser',
};
