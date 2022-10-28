import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import rootReducer from "../reducer/rootReducer";

const authPersistConfig = {
  key: "auth",
  storage,
  version: 1,
  whitelist: ["users"],
  blacklist: [""],
};

const persistedReducer = combineReducers({
  ...rootReducer,
  auth: persistReducer(authPersistConfig, rootReducer.auth),
});

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
