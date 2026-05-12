import { createSlice } from "@reduxjs/toolkit";

let count = localStorage.getItem('count') || 0;

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value += 1;
        },
        decrement: (state, action) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        resetValue: (state, action) => {
            state.value = 0;
        }
    },
})

export const { increment, decrement, incrementByAmount, resetValue} = counterSlice.actions;

export default counterSlice.reducer;