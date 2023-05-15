import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./components/features/listSlice";

const store= configureStore({
  reducer: {
    lists: listReducer
  }
});

export default store;


