import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { setUser } from '../../../store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from '../../../hooks/useAuth';
import { Form } from '../../forms/signInSignUpForm';
import { RoutePaths } from '../../../consts/consts';
import css from './signUp.module.css';

export function SignUp() {
  const { handleRegister } = useAuth();

  const handleClick = (email: string, password: string) => {
    handleRegister(email, password);
  };

  return (
    <div className={css.signup}>
      <Form name="регистрации" title="РЕГИСТРАЦИЯ" handleClick={handleClick} />
      <span>
        <Link to={RoutePaths.SIGNIN}>Уже есть аккаунт</Link>
      </span>
    </div>
  );
}
