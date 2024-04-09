import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL, MOVIE_URL, apiHost, keyAxiosHeader } from '../consts/consts';

export const movieApiOptions: AxiosRequestConfig = {
  method: 'GET',
  url: MOVIE_URL,
  headers: {
    'X-RapidAPI-Key': keyAxiosHeader,
    'X-RapidAPI-Host': apiHost,
  },
};
export const moviesListParams = {
  method: 'GET',
  url: BASE_URL,
  headers: {
    'X-RapidAPI-Key': '25f11966f0mshc3667469a80739fp1d7c41jsn0905e1b722a9',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
  },
};
