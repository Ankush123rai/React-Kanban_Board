import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = [
    {
        id: uuidv4(),
        title: "Title",
        cards: [
            {
                id: uuidv4(),
                title: "Card 1",
            },
            {
                id: uuidv4(),
                title: "Card 2",  
            },
            {
                id: uuidv4(),
                title: "Card 3",
            },
        ],
    }
  ];
   


const CardSlice = createSlice({
    
  name: 'CardList',

  initialState,
  
  reducers: {
    add: (state, action) => {
      const id = uuidv4();
      action.payload.id = id;
      return [...state, action.payload];
    },
    remove(state,action) {
        return state.find(item=> item.id != action.payload)
      },
  }
});

export const { add,remove } = CardSlice.actions;
export default CardSlice.reducer;