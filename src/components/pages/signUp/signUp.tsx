import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { Form } from '../../forms/signInSignUpForm';
import { RoutePaths } from '../../../consts/consts';
import css from './signUp.module.css';

export function SignUp() {
  const { handleRegister } = useAuth();

  const handleClick = useCallback(
    (email: string, password: string) => {
      handleRegister(email, password);
    },
    [handleRegister]
  );

  return (
    <div className={css.signup}>
      <Form name="регистрации" title="РЕГИСТРАЦИЯ" handleClick={handleClick} />
      <span>
        <Link to={RoutePaths.SIGNIN}>Уже есть аккаунт</Link>
      </span>
    </div>
  );
}
