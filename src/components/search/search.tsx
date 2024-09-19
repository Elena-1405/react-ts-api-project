import React from 'react';
import css from './search.module.css';
import search from '../../shared/search.svg';
import clear from '../../shared/clear.svg';
import { useState } from 'react';
import { RoutePaths } from '../../consts/consts';
import MovieDataBase from './searchByKeyword';
import { Link } from 'react-router-dom';

export const Search = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const handleInputChange = (event: { target: HTMLInputElement }) => {
    setInputValue(event.target.value);
  };

  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  let historySearch: Array<string> = [];

  async function btnSearch(): Promise<void> {
    const splitHistory = localStorage.getItem('history')?.split(',') || [];
    const historyExist = splitHistory.filter((searchTerm) => searchTerm === inputValue);
    if (historyExist.length === 0) {
      historySearch = splitHistory;
      historySearch.push(inputValue);
      localStorage.setItem('history', historySearch.toString());
    }
  }
 
  function searchClear() {
    setInputValue('');
  }

  return (
    <div className={css.search}>
      <Link to={RoutePaths.SEARCH}>
        <input
          className={css.input}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="Поиск"
        />
      </Link>
      <img className={css.searchIcon} src={search} onClick={btnSearch} alt="search" />
      <img className={css.clearIcon} src={clear} onClick={searchClear} alt="clear" />
      {MovieDataBase(inputValue.trim().replace(/\s+/g, ' ').split(' ').join('%20'))}
      
    </div>
  );
};
