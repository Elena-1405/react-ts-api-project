import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './errorFallback.module.css';

export function ErrorFallback() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className={css.ErrorFallback}>
      <p className={css.ErrorFallback}>Похоже, что-то пошло не так...</p>

      <button className="backPage" onClick={handleGoBack}>
        Обратно
      </button>
    </div>
  );
}
