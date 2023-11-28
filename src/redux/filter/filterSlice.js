import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
