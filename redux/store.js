import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  REHYDRATE,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
} from "redux-persist";
import rootReducer from "./rootReducer";
import { AsyncStorage } from "react-native";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE],
    },
  }),
});

export const persistor = persistStore(store);

export default store;
