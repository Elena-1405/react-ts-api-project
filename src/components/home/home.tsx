import React, { Suspense } from 'react';
import css from './home.module.css';

export function Home() {
  return (
    <div className={css.home}>
      <Suspense fallback={<h3>Загрузка...</h3>}>
        <div className={css.txt}>
          <h2>Добро пожаловать!</h2>
        </div>
      </Suspense>
    </div>
  );
}
