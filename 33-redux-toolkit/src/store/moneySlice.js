import { createSlice } from "@reduxjs/toolkit";

const moneySlice = createSlice({
    name : 'money',
    initialState : {money :0, saveMoney : ''},
    reducers : {
        saveMoney : (state, action) => {
            state.saveMoney = Number(action.payload)
        },
        plus : (state, action) => {
            state.money += Number(action.payload)
        },
        minus : (state, action) => {
            state.money -= Number(action.payload)
        },
    }
})

export const { plus, minus, saveMoney } = moneySlice.actions;

export default moneySlice.reducer;