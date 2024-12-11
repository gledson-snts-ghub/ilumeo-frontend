import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    id: string;
    accessCode: string;
}

const initialState: UserState = {
    id: "",
    accessCode: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state: UserState, action: PayloadAction<UserState>) => {
            state.id = action.payload.id;
            state.accessCode = action.payload.accessCode;
        },
        logout: (state: UserState) => {
            state.id = "";
            state.accessCode = "";
        },
    },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
