import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ElementInitialState {
  selected: string[];
  weakness: string[];
}

const initialState: ElementInitialState = {
  selected: [],
  weakness: [],
};

export const elementSlice = createSlice({
  name: 'element',
  initialState,
  reducers: {
    setSelected: (state, action: PayloadAction<string[]>) => {
      state.selected = action.payload;
    },
    resetSelected: (state) => {
      state.selected = [];
    },
    setWeakness: (state, action: PayloadAction<string[]>) => {
      state.weakness = action.payload;
    },
  },
});

export const { setSelected, resetSelected, setWeakness } = elementSlice.actions;
const elementReducer = elementSlice.reducer;

export { elementReducer };
