import { configureStore } from "@reduxjs/toolkit";

import { catalogsReducer } from "./catalogsSlise";
import { filterReducer } from "./filterSlise";
import  favoriteCardsReducer  from "./favoriteCardsSlice";
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

const favoritePersistConfig = {
  key: "favoriteCards",
  storage,
  whitelist: ["favoriteCards"],
};

const persistedUserReducer = persistReducer(
  favoritePersistConfig,
  favoriteCardsReducer
);


export const store = configureStore({
  reducer: {
    catalogs: catalogsReducer,
    filter: filterReducer,
    favoriteCards: persistedUserReducer,
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);