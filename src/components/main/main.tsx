import React from 'react';
import css from './main.module.css';
import { Search } from '../search/search';

export default function Main() {
  return (
    <div className={css.main}>
      <Search />
      <div className={css.txt}>
        <h3>Добро пожаловать!</h3>
      </div>

      <img className={css.img} src="" alt="pic" />
    </div>
  );
}
