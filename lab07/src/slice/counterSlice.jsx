//goi gon action + reducer

import { createSlice } from "@reduxjs/toolkit";

const counterSlide = createSlice({
    name: 'counter',
    initialState:{count:0},
    reducers:{
        increment: (state)=> {state.count +=1},
        decrement: (state)=> {state.count -=1},
    }
});
export const {increment, decrement}= counterSlide.actions;
export default counterSlide.reducer;

//khong can switch case. khong define type thu configureStore
