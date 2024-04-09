import React, { Suspense } from 'react';
import css from './home.module.css';

export function Home() {
  return (
    <div className={css.main}>
      <Suspense fallback={<h3>Загрузка...</h3>}>
        <div className={css.txt}>
          <h3>Добро пожаловать!</h3>
        </div>
      </Suspense>
    </div>
  );
}
