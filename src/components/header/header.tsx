import React from 'react';
import { useState } from 'react';
import css from './header.module.css';

export default function Header() {
  // const isAuthorized = !!user;

  //   const signOut = () => {
  //     window.localStorage.removeItem('token');
  //     setUser(undefined);
  //   };

  return (
    <>
      <header className={css.header}>
        <div className={css.logo}>
          <img src="" alt="logo" />
        </div>
        <div className={css.buttons}>
          <button className={css.button}>ВОЙТИ</button>
          <button className={css.button}>РЕГИСТРАЦИЯ</button>
        </div>
        <button className={css.button}>ВЫЙТИ</button>
      </header>
    </>
  );
}
