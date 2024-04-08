import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { moviesList, movieById, mockMovie } from './movieConsts';
import { MovieItem } from '../../types/types';
import { useParams, useNavigate } from 'react-router-dom';
import { mockMovie } from './movieConsts';
import css from './movieCard.module.css';

export const MovieCard = () => {
  const isAuth = true;
  const { id } = useParams();
  //const id = params.id || 'tt0000103';
  const navigate = useNavigate();

  const [movieItem, setMovieItem] = useState<MovieItem>({});

  // Чтобы не дергать каждый раз API, так как у нас ограничено кол-во запросов
  // useEffect(() => {
  //   setMovieItem(mockMovie);
  // }, []);

  //Запрос с API, так же надо менять и в movieList
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request({
          method: 'GET',
          url: `https://moviesdatabase.p.rapidapi.com/titles/${id}`,
          headers: {
            'X-RapidAPI-Key': '25f11966f0mshc3667469a80739fp1d7c41jsn0905e1b722a9',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
          },
        });
        setMovieItem(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!movieItem) {
    return <div>Загрузка...</div>;
  }

  const isVerticalImage =
    (movieItem?.primaryImage?.height || 0) > (movieItem?.primaryImage?.width || 0);

  return (
    <>
      {isAuth ? (
        <div className={css.card}>
          {movieItem && (
            <div className={css.info}>
              {movieItem.primaryImage && (
                <img
                  src={movieItem.primaryImage?.url}
                  alt={'MovieImage'}
                  width={isVerticalImage ? 225 : 400}
                  height={isVerticalImage ? 300 : 225}
                />
              )}
              <h2>Информация</h2>
              {movieItem.titleText && <p>Название: {movieItem.titleText?.text}</p>}
              {movieItem.originalTitleText && (
                <p>Название на языке оригиналa: {movieItem.originalTitleText?.text}</p>
              )}

              {movieItem.releaseYear && <p>Release Year: {movieItem.releaseYear?.year}</p>}
              {movieItem.releaseDate?.day && <p>Release Date: {movieItem.releaseDate?.day}</p>}
              <div className={css.buttons}>
                <button className={css.favoriteButton}>В избранное</button>
                <button className={css.backButton} onClick={handleGoBack}>
                  К списку
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h4>Login or go home</h4>
        </div>
      )}
    </>
  );
};
