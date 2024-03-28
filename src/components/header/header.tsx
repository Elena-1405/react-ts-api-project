import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../shared/routePaths';
import css from './header.module.css';

export function Header() {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <img src={RoutePaths.HOME} alt="logo" />
      </div>
      <div className={css.buttons}>
        <Link to={RoutePaths.SIGNIN}>
          <button className={css.button}>ВОЙТИ</button>
        </Link>
        <Link to={RoutePaths.SIGNUP}>
          <button className={css.button}>РЕГИСТРАЦИЯ</button>
        </Link>
      </div>
      <button className={css.button}>ВЫЙТИ</button>
    </header>
  );
}
