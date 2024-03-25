import React from 'react';
import css from './main.module.css';
import { Search } from '../search/search';
//import img from '../shared/img.jpg';

export default function Main() {
  return (
    <main className={css.main}>
      <Search />
      <div className={css.txt}>
        <h3>Добро пожаловать!</h3>
      </div>

      <img className={css.img} src="" alt="pic" />
    </main>
  );
}
