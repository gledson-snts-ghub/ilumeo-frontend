import { configureStore } from "@reduxjs/toolkit";
import tooltipReducer from "./slices/tooltipSlice";

export const store = configureStore({
  reducer: {
    tooltip: tooltipReducer,
  },
});
