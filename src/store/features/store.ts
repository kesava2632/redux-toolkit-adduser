import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './personSlice';

export const store = configureStore({
    reducer: {
        person: userReducer,
    },
});


export const useAppDispatch : ()=> typeof store.dispatch = useDispatch
export const useAppSelector : TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector