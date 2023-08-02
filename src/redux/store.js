
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { userSlice } from "./userSlice";
import { questionsSlice } from './questionsSlice';

const rootReducer = combineReducers({
    user: userSlice.reducer,
    question: questionsSlice.reducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;