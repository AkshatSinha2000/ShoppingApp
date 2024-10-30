import { configureStore } from '@reduxjs/toolkit'
import productApiSlice from './slice/handleApiCall'
import pagination from './slice/handlepagination';
import cart  from './slice/handlecart';
import favourite from './slice/favouriteSlice';
export const store = configureStore({
  reducer: {
    favourite : favourite,
    cart: cart,
    pagination: pagination,
    products: productApiSlice,
  },

middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware({
    serializableCheck: false,
  }).concat(),
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch