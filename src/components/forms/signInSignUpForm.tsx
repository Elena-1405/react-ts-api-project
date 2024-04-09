import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { emailValidation } from '../../consts/consts';
import css from './signInSignUpForm.module.css';

interface FormProps {
  name: string;
  title: string;
  handleClick: (email: string, password: string) => void;
}

type FormData = {
  email: string;
  password: string;
};

export const Form: React.FC<FormProps> = ({ name, title, handleClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    handleClick(data.email, data.password);
  };

  return (
    <div className={css.formContainer}>
      <h1>Для {name} введите почту и пароль</h1>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="email" {...register('email', emailValidation)} />
        {errors.email && <span className={css.info}>Введите корректный email</span>}
        <input
          type="password"
          placeholder="Password"
          {...register('password', { required: true, minLength: 6 })}
        />
        {errors.password && (
          <span className={css.info}>Пароль должен содержать не менее 6 символов</span>
        )}
        <button className={css.submit} type="submit">
          {title}
        </button>
      </form>
    </div>
  );
};
