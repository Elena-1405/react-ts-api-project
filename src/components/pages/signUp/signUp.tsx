import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { setUser } from '../../../store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { NotFound } from '../notFoundPage/notFound';
import { Form } from '../../forms/signInSignUpForm';
import { RoutePaths } from '../../../shared/routePaths';
import css from './signUp.module.css';

export function SignUp() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate('/main');
      })
      .catch((error) => {
        console.error('Произошла ошибка', error);
        return <NotFound />;
      });
  };

  return (
    <div className={css.signin}>
      <Form title="РЕГИСТРАЦИЯ" handleClick={handleRegister} />
      <span>
        <Link to={RoutePaths.SIGNIN}>Уже есть аккаунт</Link>
      </span>
    </div>
  );
}
