import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { setUser } from '../../../store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { NotFound } from '../notFoundPage/notFound';
import { Form } from '../../forms/signInSignUpForm';
import { RoutePaths } from '../../../shared/routePaths';
import css from './signIn.module.css';

export const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
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
      <Form title="ВОЙТИ" handleClick={handleLogin} />
      <span>
        Или
        <Link to={RoutePaths.SIGNUP}> зарегистрируйтесь</Link>
      </span>
    </div>
  );
};

export default SignIn;
