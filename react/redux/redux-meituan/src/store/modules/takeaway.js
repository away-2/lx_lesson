import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodsListStore = createSlice({
  name: "foodsList",
  initialState: {
    foodsList: [],
    activeIndex: 0,
    cartList: [],
  },
  reducers: {
    setFoodsList(state, action){
      state.foodsList = action.payload
    },
    changeActiveIndex(state, action) {
      state.activeIndex = action.payload
    },
    addCart(state, action) {
      const item = state.cartList.find(item => item.id === action.payload.id)
      console.log(item, 'item');
      if (item) {
        item.count++
      }else{
        state.cartList.push(action.payload)
      }
    }
  },
});

const { setFoodsList, changeActiveIndex, addCart } = foodsListStore.actions;

const fetchFoodsList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3004/takeaway");
    dispatch(setFoodsList(res.data));
  };
};

export { fetchFoodsList, changeActiveIndex, addCart };

const reducer = foodsListStore.reducer;

export default reducer;
