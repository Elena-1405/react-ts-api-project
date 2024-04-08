import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { movieList, moviesListParams } from './consts';
import { MovieItem } from '../../types/types';
import { Link } from 'react-router-dom';

export const MoviesList = () => {
  const isAuth = true;

  // Запрос списка фильмов, на всякий случай если откажет АПИ
  const [moviesData, setMoviesData] = useState<MovieItem[]>([]);

  //Запрос с API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(moviesListParams);
        setMoviesData(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  //Чтобы не дергать каждый раз апи, так как у нас ограничено кол-во запросов
  // useEffect(() => {
  //   const filteredMovies = movieList.filter((movie) => movie.releaseDate !== null);
  //   setMoviesData(filteredMovies);
  // }, []);

  return (
    <>
      {isAuth ? (
        <div>
          {Array.isArray(moviesData) &&
            moviesData.length > 0 &&
            moviesData.map((movie) => (
              <div key={movie.id}>
                <Link to={`/moviecard/${movie.id}`}>{movie.titleText?.text}</Link>
              </div>
            ))}
        </div>
      ) : (
        <div>Login or go home</div>
      )}
    </>
  );
};
