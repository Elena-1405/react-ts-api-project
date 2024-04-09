import { configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import { signUpMiddleware } from '../middleware/signUpMiddleware';


export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(signUpMiddleware), 
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
