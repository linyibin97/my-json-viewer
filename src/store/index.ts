import { configureStore } from "@reduxjs/toolkit";
import theme from "./reducer/theme";
import files from "./reducer/files";

export const store = configureStore({
  reducer: {
    theme,
    files,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
