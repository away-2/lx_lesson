import { configureStore } from "@reduxjs/toolkit";
import foodsListReducer from "./modules/takeaway";

const store = configureStore({
  reducer: {
    foods: foodsListReducer,
  },
});

export default store;
