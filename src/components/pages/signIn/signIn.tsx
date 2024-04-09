import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { Form } from '../../forms/signInSignUpForm';
import { RoutePaths } from '../../../consts/consts';
import css from './signIn.module.css';

export const SignIn: React.FC = () => {
  const { handleLogin } = useAuth();

  const handleClick = useCallback(
    (email: string, password: string) => {
      handleLogin(email, password);
    },
    [handleLogin]
  );

  return (
    <div className={css.signin}>
      <Form name="входа" title="ВОЙТИ" handleClick={handleClick} />
      <span>
        Или
        <Link to={RoutePaths.SIGNUP}> зарегистрируйтесь</Link>
      </span>
    </div>
  );
};

export default SignIn;
