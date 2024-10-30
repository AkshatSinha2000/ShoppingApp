import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const initialState={
  products:[],
  loading:false,
  error:null
  }

  export const fetchProducts=async()=>{
    const response = await fetch(`https://fakestoreapi.com/products`);
    // console.log('response',response);
    return response.json();
}

export const fetchProductById = createAsyncThunk('products/fetchProductById',
  async()=>{
      try {
          const product = await fetchProducts();
          // console.log('ya per hum aagay',product);
          return product;
      } catch (error) {
          console.log(error);  
      }    
  }
)

export const productApiSlice = createSlice({
  name:'products',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
      builder.addCase(fetchProductById.fulfilled,(state,action)=>{
        // console.log(action.payload)
        state.products = action.payload
          console.log('fetched');
          
      })
      builder.addCase(fetchProductById.pending,(state,action)=>{
          state.loading=false,
          state.error = null;
          
      })
      builder.addCase(fetchProductById.rejected,(state,action)=>{
          state.loading=false,
          state.error = null;
          
      })
  }
})

export default productApiSlice.reducer;