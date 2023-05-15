import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
  lists: [
    { 
      id: 'list-0',
      title: 'To Do',
      cards: [
        {
          id: 'card-0',
          title: 'Learn Redux',
          descript:[{
            id:'',
            title:"",
            text:"",
            activity:"",
            time:""

          }]
        },
       
      ]
    },
  ]
};
 

const listSlice = createSlice({
  name: 'lists',
  initialState: initialState.lists,
  reducers: {
    addList: (state, action) => {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        cards: []
      });
    },

    deleteList: (state, action) => {
      return state.filter(list => list.id !== action.payload);
    },

    addCard: (state, action) => {
      const { listId, title, id } = action.payload;
      const list = state.find(list => list.id === listId);
      list.cards.push({ title, id });
    },
  },
});
export const { addList, deleteList, addCard } = listSlice.actions;
export default listSlice.reducer;
