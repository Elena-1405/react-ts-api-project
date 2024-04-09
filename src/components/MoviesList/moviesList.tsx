import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { moviesListParams } from '../../consts/axios';
import { MovieItem } from '../../types/types';
import { RoutePaths } from '../../consts/consts';
import { Link } from 'react-router-dom';

export const MoviesList = () => {
  const [moviesData, setMoviesData] = useState<MovieItem[]>([]);

  //Запрос с API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(moviesListParams);
        setMoviesData(response.data.results);
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
    <div>
      {Array.isArray(moviesData) &&
        moviesData.length > 0 &&
        moviesData.map((movie) => (
          <div key={movie.id}>
            <Link to={`/moviecard/${movie.id}`}>{movie.titleText?.text}</Link>
          </div>
        ))}
    </div>
  );
};
