import { createSlice } from '@reduxjs/toolkit';
import { GetCars } from '../services/carsService/Requests/GetCars';

interface IHomeState {
  topCars: GetCars[];
}

const initialState: IHomeState = {
  topCars: [],
};

export const HomeSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducers: {
    setTopCars: (state, action) => {
      state.topCars = action.payload;
    }
  },
});

export const { setTopCars } = HomeSlice.actions;
export default HomeSlice.reducer;
