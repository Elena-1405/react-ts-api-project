import React from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { useAuth } from '../../hooks/useAuth';
import { removeUser } from '../../store/slices/userSlice';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../shared/routePaths';
import css from './header.module.css';

export function Header() {
  const dispatch = useAppDispatch();

  const { isAuth, email } = useAuth();

  const handleRemove = () => {
    dispatch(removeUser());
  };

  return (
    <header className={css.header}>
      <div className={css.logo}>
        <img src={RoutePaths.HOME} alt="logo" />
      </div>
      {isAuth && <div className={css.email}>{email}</div>}
      {!isAuth ? (
        <div className={css.buttons}>
          <Link to={RoutePaths.SIGNIN}>
            <button className={css.button}>ВОЙТИ</button>
          </Link>
          <Link to={RoutePaths.SIGNUP}>
            <button className={css.button}>РЕГИСТРАЦИЯ</button>
          </Link>
        </div>
      ) : (
        <Link to={RoutePaths.HOME}>
          <button className={css.button} onClick={handleRemove}>
            ВЫЙТИ
          </button>
        </Link>
      )}
    </header>
  );
}
