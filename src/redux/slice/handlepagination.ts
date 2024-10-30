import {createSlice } from '@reduxjs/toolkit'
const initialState={
  currentPage: 1,
  start:0,
  end:5,
  loading:false,
  error:null
  }

  export const pagination = createSlice({
    name:'pagination',
    initialState,
    reducers: {
      handleNext: (state,action)=>{
        state.currentPage = state.currentPage + 1
        state.start = (state.currentPage - 1) * 5
        state.end = state.start  + 5
      },
      handlePrev: (state,action)=>{
        state.currentPage = state.currentPage - 1
        state.start = (state.currentPage - 1) * 5
        state.end = state.start + 5
      }
    },
  })

  export const {handleNext,handlePrev} = pagination.actions
  export default pagination.reducer;

