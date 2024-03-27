import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { setUser } from '../../../store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { NotFound } from '../notFoundPage/notFound';
import css from './signUp.module.css';

export function SignUp() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (username: string, email: string, password: string) => {
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
    <div>
      <h1>Пожалуйста, зарегистрируйтесь:</h1>
      <input
        type="text"
        id="name"
        placeholder="Your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        id="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={css.button} onClick={() => handleRegister(username, email, password)}>
        Войти
      </button>
      <span>
        <Link to="/signin">Уже есть аккаунт</Link>
      </span>
    </div>
  );
}
