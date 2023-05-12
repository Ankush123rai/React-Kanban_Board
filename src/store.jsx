import { configureStore } from '@reduxjs/toolkit'
import CardReducer from './components/features/CardSlice';

 const store = configureStore({
  reducer: {
    CardList: CardReducer
  },
})

export default store