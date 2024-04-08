import React from 'react';
import css from './search.module.css';
import search from '../../shared/search.svg';
import clear from '../../shared/clear.svg';
import { useState, useEffect } from 'react';
import MovieDataBase from './searchByKeyword';

export const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event: { target: HTMLInputElement; }) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={css.search}>
      <img className={css.icon} src={search} alt="search" />
      <input className={css.input} value={inputValue} onChange={handleInputChange} placeholder="Поиск" />
      <img className={css.clearIcon} src={clear} alt="clear" />
      {MovieDataBase(inputValue.trim().replace(/\s+/g,' ').split(' ').join('%20'))}
    </div>
  );
};
