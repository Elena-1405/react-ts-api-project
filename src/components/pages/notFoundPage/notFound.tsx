import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './notFound.module.css';

export function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className={css.notFound}>
      <h3>Страница не найдена!</h3>
      <button type="button" className="backPage" onClick={handleGoBack}>
        Назад
      </button>
    </div>
  );
}
