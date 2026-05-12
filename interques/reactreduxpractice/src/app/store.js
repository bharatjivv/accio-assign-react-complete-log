import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';

export const store = configureStore ({
    // add a store
    reducer : counterReducer
})

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});