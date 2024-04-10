import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../search/search';
import { MoviesList } from '../moviesList/moviesList';
import { RoutePaths } from '../../consts/consts';
import { useAuth } from '../../hooks/useAuth';
import css from './main.module.css';
import styles from '../../consts/cssConsts.module.css';

export function Main() {
  const { isAuth } = useAuth();
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
        <span className={css.txt}>
          <Link to={RoutePaths.SIGNUP} className={styles.link}>
            <h3>Зарегистрируйтесь,</h3>{' '}
          </Link>
          или
          <Link to={RoutePaths.SIGNIN} className={styles.link}>
            <h3>войдите,</h3>{' '}
          </Link>
          <h3>чтобы продолжить</h3>
        </span>
      )}
    </>
  );
}
