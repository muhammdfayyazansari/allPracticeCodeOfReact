import { createSlice } from "@reduxjs/toolkit";



const initialState = {value : 0};


const counterSlice = createSlice({
  name : 'counter',
  initialState ,
  reducers: {
    increament(state){
      state.value++;
    },
    decreament(state){
      state.value--;
    },
    increamentByAmount(state, action){
      state.value += action.payload;
    },
    decreamentByAmount(state, action){
      state.value = state.value - action.payload;
    }
  }
})

export const {increament, decreament, increamentByAmount , decreamentByAmount } = counterSlice.actions;
export default counterSlice.reducer;