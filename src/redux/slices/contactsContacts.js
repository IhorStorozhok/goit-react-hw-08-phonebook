import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({name:`filter`,
initialState:'',
reducers:{addToFilter:(state,action)=>{return action.payload}}})



export const {addToFilter}=filterSlice.actions
export {filterSlice}