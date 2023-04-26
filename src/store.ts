import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
import { tableSlice } from './features/table/tableSlice';
import storage from "./config/storage";

const rootReducer = combineReducers({
  [tableSlice.name]: tableSlice.reducer,
});

export function makeStore() {
  const isServer = typeof window === "undefined";
  if (isServer)
    return configureStore({
      reducer: rootReducer,
    });

  const persistConfig = {
    key: "nextjs",
    whitelist: [tableSlice.name],
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  let store: any = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  store.__persistor = persistStore(store);
  return store;
}

const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
