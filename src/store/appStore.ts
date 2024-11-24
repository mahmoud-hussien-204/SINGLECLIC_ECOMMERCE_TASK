import {combineSlices, configureStore} from "@reduxjs/toolkit";

import {userSlice} from "@/store/userSlice";

import {cartSlicePersist} from "./cartSlice";

import {persistStore} from "redux-persist";

export const reducers = combineSlices({
  userSlice: userSlice.reducer,
  cartSlice: cartSlicePersist,
});

export const appStore = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persister = persistStore(appStore);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
