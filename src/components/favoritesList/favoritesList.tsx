import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useFavorites } from '../../hooks/useFavorites';
import { Link } from 'react-router-dom';

export function FavoritesList() {
  const { isAuth } = useAuth();
  const { favorites } = useFavorites();
  return (
    <div className="List">
      <h2>Избранные фильмы</h2>
      {favorites.length === 0 ? (
        <p>Список избранных фильмов пуст</p>
      ) : (
        isAuth && (
          <ul>
            {favorites.map((movie) => (
              <Link key={movie.id} to={`/moviecard/${movie.id}`}>
                <li>{movie.titleText?.text}</li>
              </Link>
            ))}
          </ul>
        )
      )}
    </div>
  );
}
