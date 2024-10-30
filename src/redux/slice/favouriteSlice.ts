import {createSlice } from '@reduxjs/toolkit'
const initialState={
  favourite:[],
  loading:false,
  error:null
  }

  export const favourite = createSlice({
    name:'cart',
    initialState,
    reducers: {
      handleFavourite: (state, action) =>{
        state.favourite = state.favourite.concat(action.payload)
        console.log('kjdsnfkjndkjv',state.favourite)
      },
      handleRemoveFavourite: (state, action) =>{
        const removed = state.favourite.filter((item)=> item.id !== action.payload.id)
        state.favourite = removed
        console.log('kjdsnfkjndkjv',state.favourite)
      }
    },
  })

  export const {handleFavourite,handleRemoveFavourite} = favourite.actions
  export default favourite.reducer;
