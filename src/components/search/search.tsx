import React from 'react';
import css from './search.module.css';
import search from '../../shared/search.svg';
import clear from '../../shared/clear.svg';

export const Search = () => {
  //const { searchValue, setSearchValue } = useContext(SearchContext)

  return (
    <div className={css.search}>
      <img className={css.icon} src={search} alt="search" />
      <input
        //value={searchValue}
        //onChange={(event) => setSearchValue(event.target.value)}
        className={css.input}
        placeholder="Поиск"
      />
      {
        //searchValue &&
        <img className={css.clearIcon} src={clear} alt="clear" />
      }
    </div>
  );
};
