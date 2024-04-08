import axios, { AxiosRequestConfig } from 'axios';

export const movieApiOptions: AxiosRequestConfig = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/%7Bid%7D',
  headers: {
    'X-RapidAPI-Key': '733ab1fa5dmsh54cc14239a603eap1aedc0jsnb0e2fe7b2598',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
  },
};
