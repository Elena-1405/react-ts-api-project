import React from 'react';
import css from './search.module.css';
import search from '../../shared/search.svg';
import clear from '../../shared/clear.svg';

export const Search = () => {
  return (
    <div className={css.search}>
      <img className={css.icon} src={search} alt="search" />
      <input className={css.input} placeholder="Поиск" />

      <img className={css.clearIcon} src={clear} alt="clear" />
    </div>
  );
};
