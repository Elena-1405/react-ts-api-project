export enum RoutePaths {
  HOME = '/',
  MAIN = '/main',
  SIGNIN = '/signin',
  SIGNUP = '/signup',
  SEARCH = '/search',
  MOVIECARD = '/moviecard',
  FAVORITES = '/favorites',
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

export const BASE_URL = `https://moviesdatabase.p.rapidapi.com/titles/`;
export const MOVIE_URL = `${BASE_URL}{id}`;
export const apiHost = 'moviesdatabase.p.rapidapi.com';
export const keyAxiosHeader = process.env.REACT_APP_API_KEY_AXIOS_HEADER;
export const APIKey = process.env.REACT_APP_API_KEY;

export const emailValidation = {
  required: true,
  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};
