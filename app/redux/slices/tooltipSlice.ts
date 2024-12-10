// redux/slices/tooltipSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TooltipState {
  isTooltipVisible: boolean;
  tooltipMessage: string;
}

const initialState: TooltipState = {
  isTooltipVisible: false,
  tooltipMessage: "",
};

const tooltipSlice = createSlice({
  name: "tooltip",
  initialState,
  reducers: {
    setTooltipVisible(state, action: PayloadAction<boolean>) {
      state.isTooltipVisible = action.payload;
    },
    setTooltipMessage(state, action: PayloadAction<string>) {
      state.tooltipMessage = action.payload;
    },
  },
});

export const { setTooltipVisible, setTooltipMessage } = tooltipSlice.actions;
export default tooltipSlice.reducer;
