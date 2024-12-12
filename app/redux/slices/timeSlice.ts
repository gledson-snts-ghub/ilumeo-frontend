import { createSlice } from "@reduxjs/toolkit";

interface TimeState {
    start?: string;
    end?: string;
}

const initialState: TimeState = {
    start: undefined,
    end: undefined,
};

const timeChoosed = createSlice({
    name: "timeChoosed",
    initialState,
    reducers: {
        setTimeChoosed: (
            state,
            action: { type: string; payload: TimeState }
        ) => {
            if (action.payload.start) {
                state.start = action.payload.start;
            }
            if (action.payload.end) {
                state.end = action.payload.end;
            }
        },
    },
});

export const { setTimeChoosed } = timeChoosed.actions;
export default timeChoosed.reducer;
