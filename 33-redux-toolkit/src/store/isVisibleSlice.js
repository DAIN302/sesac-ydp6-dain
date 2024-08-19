import { createSlice } from '@reduxjs/toolkit'

const visibilitySlice =  createSlice({
    name : 'change',
    initialState : true,
    reducers : {
        changeVisibility : (state) => {
            return !state; // 상태 반전
        }
    }
})

export const {changeVisibility} =  visibilitySlice.actions;

export default visibilitySlice.reducer;