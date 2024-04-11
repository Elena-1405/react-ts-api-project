import React from 'react';
import css from './search.module.css';
import search from '../../shared/search.svg';
import clear from '../../shared/clear.svg';
import { useState } from 'react';
import MovieDataBase from './searchByKeyword';

export const Search = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const handleInputChange = (event: { target: HTMLInputElement }) => {
    setInputValue(event.target.value);
  };

  let historySearch: Array<string> = [];

  async function btnSearch(): Promise<void> {
    const splitHistory = localStorage.getItem('history')?.split(',') || [];
    const historyExist = splitHistory.filter((searchTerm) => searchTerm === inputValue);
    if (historyExist.length === 0) {
      historySearch = splitHistory;

      historySearch.push(inputValue);
      localStorage.setItem('history', historySearch.toString());
    }

    console.log(historySearch);
  }
  function fan() {
    if (historySearch?.length === 0) {
      return <div></div>;
    }
    return (
      <div>
        {historySearch?.map((elem) => (
          <ul key={elem}>
            <li>{elem}</li>
          </ul>
        ))}
      </div>
    );
  }

  return (
    <div className={css.search}>
      <input
        className={css.input}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={fan}
        placeholder="Поиск"
      />
      <img className={css.searchIcon} src={search} onClick={btnSearch} alt="search" />
      <img className={css.clearIcon} src={clear} alt="clear" />
      {MovieDataBase(inputValue.trim().replace(/\s+/g, ' ').split(' ').join('%20'))}
    </div>
  );
};
