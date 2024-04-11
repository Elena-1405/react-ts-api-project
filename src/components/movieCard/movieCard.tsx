import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BASE_URL, apiHost, APIKey } from '../../consts/consts';
import { MovieItem } from '../../types/types';
import { useParams, useNavigate } from 'react-router-dom';
import { RoutePaths } from '../../consts/consts';
import { useAuth } from '../../hooks/useAuth';
import { useFavorites } from '../../hooks/useFavorites';
import css from './movieCard.module.css';

const MovieCard: React.FC = () => {
  const { isAuth } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const [movieItem, setMovieItem] = useState<MovieItem>({});
  const apiUrl = `${BASE_URL}${id}`;
  const xRapidAPIKey = APIKey;

  const { addToFavorites, favorites, removeFromFavorites } = useFavorites();

  const isFavorite = Boolean(favorites.find((favMovie) => favMovie.id === movieItem.id));

  const handleToggleFavorite = () => {
    if (isFavorite && movieItem && movieItem.id) {
      removeFromFavorites(movieItem.id);
    } else {
      addToFavorites(movieItem);
    }
  };

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
              <h3>Информация</h3>
              {movieItem.titleText && <p>Название: {movieItem.titleText?.text}</p>}
              {movieItem.originalTitleText && (
                <p>Название на языке оригиналa: {movieItem.originalTitleText?.text}</p>
              )}

              {movieItem.releaseYear && <p>Release Year: {movieItem.releaseYear?.year}</p>}
              {movieItem.releaseDate?.day && <p>Release Date: {movieItem.releaseDate?.day}</p>}
              <div className={css.buttons}>
                <button type="button" onClick={handleToggleFavorite} className={css.favoriteButton}>
                  {isFavorite ? 'Из избранного' : 'В избранное'}
                </button>
                <button type="button" className={css.backButton} onClick={handleGoBack}>
                  Обратно к списку
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <span className={css.txt}>
          <Link to={RoutePaths.SIGNUP}>
            <h3>Зарегистрируйтесь,</h3>{' '}
          </Link>
          или
          <Link to={RoutePaths.SIGNIN}>
            <h3>войдите,</h3>{' '}
          </Link>
          <h3>чтобы продолжить</h3>
        </span>
      )}
    </>
  );
};

export default MovieCard;
