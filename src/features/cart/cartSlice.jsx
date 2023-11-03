import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

//create state
const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
  isLoading: true
};

//name and add reducers
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: state => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      // console.log(action);
      const itemId = action.payload; //we can see the payload as a property in the console (i.e. the id), when we click on the remove button. we can therefore pass this into our filter function and filter the data that is in state.
      state.cartItems = state.cartItems.filter(item => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      // console.log(payload);
      const cartItem = state.cartItems.find(item => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },

    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find(item => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: state => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach(item => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    }
  }
});

//console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
