import {configureStore}  from '@reduxjs/toolkit'
import appointmentSlice from './slices/appointmentSlice'

export const store = configureStore({
    devTools : true,
    reducer : {
        "appointment":appointmentSlice
    }
})