import React from 'react';
import { useState, ChangeEvent } from 'react';

interface FormProps {
  title: string;
  handleClick: (email: string, password: string) => void;
}
export const Form: React.FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSetEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSetPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h1>Пожалуйста, введите почту и пароль</h1>
      <input type="email" placeholder="email" value={email} onChange={handleSetEmail} />
      <input type="password" placeholder="Password" value={password} onChange={handleSetPassword} />
      <button onClick={() => handleClick(email, password)}>{title}</button>
    </div>
  );
};
