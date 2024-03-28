import React from 'react';
import { useState } from 'react';

interface FormProps {
  title: string;
  handleClick: (email: string, password: string) => void;
}
export const Form: React.FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSetEmail = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setEmail((e.target as HTMLInputElement).value);
  };

  const handleSetPassword = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setPassword((e.target as HTMLInputElement).value);
  };

  const handleSubmit = () => {
    handleClick(email, password);
  };

  return (
    <div>
      <h1>Пожалуйста, введите почту и пароль</h1>
      <input type="email" placeholder="email" value={email} onChange={handleSetEmail} />
      <input type="password" placeholder="Password" value={password} onChange={handleSetPassword} />
      <button onClick={handleSubmit}>{title}</button>
    </div>
  );
};
