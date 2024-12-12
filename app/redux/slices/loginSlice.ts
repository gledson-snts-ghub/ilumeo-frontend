import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
    code: string;
}

const initialState: LoginState = {
    code: "",
};

const timeSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setLoginCode: (state, action: PayloadAction<string>) => {
            state.code = action.payload;
        },
    },
});

export const { setLoginCode } = timeSlice.actions;
export default timeSlice.reducer;
