import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useFavorites } from '../../hooks/useFavorites';
import { RoutePaths } from '../../consts/consts';

import css from './favoriteList.module.css';

const FavoritesList: React.FC = () => {
  const { isAuth } = useAuth();
  const { favorites, removeFromFavorites } = useFavorites();

  const handleRemove = (movieId?: string) => {
    if (movieId) {
      removeFromFavorites(movieId);
    }
  };

  return (
    <div className={css.list}>
    <h2>Избранные фильмы:</h2>
    {favorites.length === 0 ? (
      <>
        <p>Список избранных фильмов пуст</p>
        <Link to={RoutePaths.MAIN}>
          <button>Обратно к списку</button>
        </Link>
      </>
    ) : (
      isAuth && (
        <ul className={css.movie}>
          {favorites.map((movie) => (
            <div key={movie.id} className={css.item}>
              <img
                className={css.image}
                src={movie.primaryImage?.url}
                alt="MovieImage"
                width={40}
                height={50}
              />
              <Link key={movie.id} to={`${RoutePaths.MOVIECARD}/${movie.id}`}>
                <li>{movie.titleText?.text}</li>
              </Link>
              <button type="button" onClick={() => handleRemove(movie.id)}>
                Удалить
              </button>
            </div>
          ))}
          <Link to={RoutePaths.MAIN}>
            <button type="button">Обратно к списку фильмов</button>
          </Link>
        </ul>
      )
    )}
  </div>
  )
};

export default FavoritesList;
