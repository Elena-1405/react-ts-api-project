import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, apiHost } from '../../consts/consts';
import { MovieItem } from '../../types/types';
import { useParams, useNavigate } from 'react-router-dom';
import { RoutePaths } from '../../consts/consts';
import { Link } from 'react-router-dom';
import css from './movieCard.module.css';

export const MovieCard = () => {
  const isAuth = true;
  const { id } = useParams();
  const navigate = useNavigate();

  const [movieItem, setMovieItem] = useState<MovieItem>({});
  const apiUrl = `${BASE_URL}${id}`;
  const xRapidAPIKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request({
          method: 'GET',
          url: apiUrl,
          headers: {
            'X-RapidAPI-Key': xRapidAPIKey,
            'X-RapidAPI-Host': apiHost,
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
        <span>
          <Link to={RoutePaths.SIGNUP}>
            <h3>Зарегистрируйтесь</h3>{' '}
          </Link>
          <h3>,чтобы продолжить</h3>
        </span>
      )}
    </>
  );
};
