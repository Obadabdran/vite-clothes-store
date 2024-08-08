import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartList: [],
  },
  reducers: {
    addClothes: (state, action) => {
      state.cartList.push(action.payload);
    },
    removeClothes: (state, action) => {
      state.cartList = state.cartList.filter(item => item.price !== action.payload);
    },
    removeall:(state)=>{
      state.cartList=[]
    }
  },
});

export const { addClothes, removeClothes,removeall } = cartSlice.actions;

export const selectClothes = state => state.clothes.clothesList;

export default cartSlice.reducer