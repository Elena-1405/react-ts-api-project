import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../consts/consts';
import logo from '../../shared/logo.png';
import css from './header.module.css';

export function Header() {
  const { isAuth, userEmail, handleLogout } = useAuth();

  const handleClick = () => {
    handleLogout();
  };

  return (
    <header className={css.header}>
      <div className={css.logo}>
        <Link to={isAuth ? RoutePaths.MAIN : RoutePaths.HOME}>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      {!isAuth ? (
        <div className={css.fav}>
          <Link to={RoutePaths.SIGNIN}>
            <button className={css.button}>ВОЙТИ</button>
          </Link>
          <Link to={RoutePaths.SIGNUP}>
            <button className={css.button}>РЕГИСТРАЦИЯ</button>
          </Link>
        </div>
      ) : (
        <div className={css.fav}>
          {isAuth && <div className={css.email}>{userEmail}</div>}
          <Link to={RoutePaths.FAVORITES}>
            <button className={`${css.exitbutton} ${css.button}`}>ИЗБРАННОЕ</button>
          </Link>
          <Link to={RoutePaths.HOME}>
            <button className={`${css.exitbutton} ${css.button}`} onClick={handleClick}>
              ВЫЙТИ
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
