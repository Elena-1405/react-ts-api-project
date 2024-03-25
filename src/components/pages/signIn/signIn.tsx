import React, { useState } from 'react';
import css from './signIn.module.css';

const SignIn: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = '/layout';
    } else {
      alert('Неверные учетные данные');
    }
  };

  return (
    <div>
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
      <button className={css.button} onClick={handleLogin}>
        Войти
      </button>
    </div>
  );
};

export default SignIn;
