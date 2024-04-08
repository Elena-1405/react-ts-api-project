import React, { Suspense } from 'react';
import { Search } from '../search/search';
import { MoviesList } from '../MoviesList/moviesList';
import css from './main.module.css';

export function Main() {
  return (
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
  );
}
