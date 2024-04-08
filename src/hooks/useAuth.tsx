import React, { ReactNode, createContext, useContext, useState } from 'react';
import { useAppDispatch } from '../hooks/reduxHooks';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../store/slices/userSlice';

interface AuthContextType {
  isAuth: boolean;
  userEmail: string | null;
  handleLogin: (userEmail: string, password: string) => void;
  handleRegister: (userEmail: string, password: string) => void;
  handleLogout: () => void;
}

interface FavoritesProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  userEmail: null,
  handleLogin: () => {
    throw new Error('handleLogin должен быть реализован');
  },
  handleRegister: () => {
    throw new Error('handleRegister должен быть реализован');
  },
  handleLogout: () => {
    throw new Error('handleLogout должен быть реализован');
  },
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(
    Boolean(window.localStorage.getItem('isAuthorized'))
  );
  const [userEmail, setUserEmail] = useState<string | null>(
    window.localStorage.getItem('userEmail')
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (userEmail: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, userEmail, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            userEmail: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        setIsAuth(true);
        setUserEmail(userEmail);
        window.localStorage.setItem('isAuthorized', JSON.stringify(true));
        window.localStorage.setItem('userEmail', JSON.stringify(userEmail));
        navigate('/main');
      })
      .catch((error) => {
        console.error('Произошла ошибка', error);
        dispatch(
          setUser({
            error:
              error.message === 'Firebase: Error (auth/invalid-credential).'
                ? 'Неправильный email или пароль.'
                : 'Не удалось войти.',
          })
        );
      });
  };

  const handleRegister = (userEmail: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userEmail, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            userEmail: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        setIsAuth(true);
        setUserEmail(userEmail);
        window.localStorage.setItem('isAuthorized', JSON.stringify(true));
        window.localStorage.setItem('userEmail', JSON.stringify(userEmail));
        navigate('/main');
      })
      .catch((error) => {
        console.error('Произошла ошибка', error);
        dispatch(
          setUser({
            error:
              error.message === 'Firebase: Error (auth/email-already-in-use).'
                ? 'Такой email уже существует'
                : 'Не удалось зарегистрироваться.',
          })
        );
      });
  };

  const handleLogout = () => {
    setIsAuth(false);
    setUserEmail(null);
    window.localStorage.removeItem('isAuthorized');
    window.localStorage.removeItem('userEmail');
  };

  return (
    <AuthContext.Provider value={{ isAuth, userEmail, handleLogin, handleRegister, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
