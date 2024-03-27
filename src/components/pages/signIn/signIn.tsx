import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { setUser } from '../../../store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { NotFound } from '../notFoundPage/notFound';
import css from './signIn.module.css';

export const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (username: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, username, password)
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
    <div>
      <h1>Пожалуйста, введите имя пользователя и пароль</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={css.button} onClick={() => handleLogin(username, password)}>
        Войти
      </button>
      <span>
        Или
        <Link to="/signup"> зарегистрируйтесь</Link>
      </span>
    </div>
  );
};

export default SignIn;
