import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist/es/constants";
import { catalogsReducer } from "./catalogsSlise";
import favoriteCardsReducer from "./favoriteCardsSlice";

const rootReducer = combineReducers({
  catalogs: catalogsReducer,
  favoriteCards: favoriteCardsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favoriteCards"],
  version: 1, 
  migrate: (state) => {
   
    if (state) {
      return Promise.resolve(state);
    }
    return Promise.resolve();
  },
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware,
});

export const persistor = persistStore(store);
