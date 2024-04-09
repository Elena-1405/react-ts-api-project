import { Middleware } from 'redux';
import { RootState } from '../store/index';
import { User } from '../consts/consts';
import { Action } from '../consts/consts';
import { ACTION_TYPE } from '../consts/consts';

export const signUpMiddleware: Middleware = (store) => (next) => (action: Action | any) => {
  const currentStore: RootState = store.getState();
  if (action && action.payload?.error) {
    alert(action.payload.error);
    return;
  }
  if (action && action.type === ACTION_TYPE.SET_USER) {
    const { email } = action.payload;
    const currentUser: User = currentStore.user;
    const emailUsed = currentUser.email === email;
    if (emailUsed) {
      alert('Вы успешно вошли в систему!');
      return;
    }
  }
  if (action && action.type === ACTION_TYPE.DELETE_USER) {
    alert('До новых встреч!');
    return;
  }
  next(action);
};
