import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import timeReducer from "./slices/timeSlice";

const store = configureStore({
    reducer: {
        login: loginReducer,
        timeChoosed: timeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
