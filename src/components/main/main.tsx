import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../search/search';
import { MoviesList } from '../moviesList/moviesList';
import { RoutePaths } from '../../consts/consts';
import css from './main.module.css';

export function Main() {
  const isAuth = true;
  return (
    <>
      {isAuth ? (
        <div>
          <Suspense fallback={<h3>Загрузка...</h3>}>
            <Search />
            <div className={css.txt}>
              <h3>Для Вас:</h3>
              <div>
                <MoviesList />
              </div>
            </div>
          </Suspense>
        </div>
      ) : (
        <span>
          <Link to={RoutePaths.SIGNUP}>
            <h3>Зарегистрируйтесь,</h3>{' '}
          </Link>
          <h3>чтобы продолжить</h3>
        </span>
      )}
    </>
  );
}
