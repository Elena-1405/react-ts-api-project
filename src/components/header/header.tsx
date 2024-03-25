import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './header.module.css';

export default function Header() {
  return (
    <>
      <header className={css.header}>
        <div className={css.logo}>
          <img src="" alt="logo" />
        </div>
        <div className={css.buttons}>
          <Link to="/signin">
            <button className={css.button}>ВОЙТИ</button>
          </Link>
          <Link to="/signup">
            <button className={css.button}>РЕГИСТРАЦИЯ</button>
          </Link>
        </div>
        <button className={css.button}>ВЫЙТИ</button>
      </header>
    </>
  );
}
