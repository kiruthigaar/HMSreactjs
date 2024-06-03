import { createSlice } from "@reduxjs/toolkit";

const AppointmentSlice = createSlice({
    name : "appointment",
    initialState : [],
    reducers : {
       Department(state , action){
        state.push(action.payload)
       },
       Doctor(state , action){
        state.push(action.payload)
       }
    }
})
export const {Department,Doctor} = AppointmentSlice.actions
export default AppointmentSlice.reducer