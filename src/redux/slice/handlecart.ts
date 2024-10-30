import {createSlice } from '@reduxjs/toolkit'
const initialState={
  item:[],
  loading:false,
  find:false,
  error:null
  }


  export const cart = createSlice({
    name:'cart',
    initialState,
    reducers: {
      handleAdd : (state,action)=>{
        if(state.item.length === 0){
          state.item = state.item.concat({'id':action.payload.id,'title':action.payload.title,'quantity':1,'description':action.payload.description,'price':action.payload.price,'rating':{'count':action.payload.rating.count,'rate':action.payload.rating.rate},'image':action.payload.image})
        }else{
          {state.item.map((item)=>{
              if(item.id === action.payload.id){
                item.quantity++;
                state.find = true
              }
            })}
            console.log('Find------->',state.find)
            if(!state.find){
              state.item = state.item.concat({'id':action.payload.id,'title':action.payload.title,'quantity':1,'description':action.payload.description,'price':action.payload.price,'rating':{'count':action.payload.rating.count,'rate':action.payload.rating.rate},'image':action.payload.image})
              
            }

        }
        state.find = false
        console.log(state.item)
      },
      handleDelete : (state,action)=>{
        // console.log('state.item',state.item)
        if(state.item.length === 0){
          state.item = state.item
        }else{
          {state.item.map((item)=>{
              if(item.id === action.payload.id){
                item.quantity--;
                if(item.quantity === 0){
                  const updatedItem = state.item.filter((product) => product.id !== item.id)
                  state.item = updatedItem
                }
              }
          })}
        }
      }
    },
  })

  export const {handleAdd,handleDelete} = cart.actions
  export default cart.reducer;
