import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './TodoReducer';

export const store = configureStore({
  reducer: {
    reducer: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // place for your middleware if you want
});

// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();

// export type RootState = ReturnType<typeof store.getState>;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
