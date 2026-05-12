import { createSlice } from "@reduxjs/toolkit";

const savedCounter = localStorage.getItem("counterValue");

const initialState = {
  counterVal: savedCounter ? JSON.parse(savedCounter) : 0,
};


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers : {
        increaseValue: (state, action) => {
            state.counterVal ++;
        },
        decreaseValue : (state, action) => {
            state.counterVal --;
        }, 
        resetValue : (state, action) => {
            state.counterVal = 0;
        }, 
        setValue : (state, action) => {
            state.counterVal += action.payload;
        }
    }

})

export const {increaseValue, decreaseValue, resetValue, setValue} = counterSlice.actions;

export default counterSlice.reducer;