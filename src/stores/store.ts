import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import colorSchemeReducer from "./colorSchemeSlice";
import sideMenuReducer from "./sideMenuSlice";

import authSlice from './features/authSlice.ts';
import daftarSlice from "./features/daftarSlice";
import pengajuanSlice from "./features/pengajuanSlice";
import ptjbSlice from "./features/ptjbSlice";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    colorScheme: colorSchemeReducer,
    sideMenu: sideMenuReducer,
    auth: authSlice,
    daftar: daftarSlice,
    pengajuanReducer: pengajuanSlice,
    ptjbReducer: ptjbSlice,
    usersReducer : userSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
