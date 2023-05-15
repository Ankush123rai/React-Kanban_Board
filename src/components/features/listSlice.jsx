import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';


const listSlice = createSlice({
  name: 'lists',
  initialState: {
    lists: []
  },

  reducers: {
    addList: (state, action) => {
      const { title } = action.payload;
      state.lists.push({ id: uuid(), title});
    },

    deleteList: (state, action) => {
      state.lists = state.lists.filter((item) => item.id !== action.payload)
    },

    addCard: (state, action) => {
        state.lists.map((item) => {
            if(item.id === action.payload.listId){
                if(Object.hasOwn(item, 'task')){
                    item.task.push(action.payload)
                }else{
                    item.task =[];
                    item.task.push(action.payload)
                }
            }
        })
    }
     
  },
});
export const { addList, deleteList, addCard } = listSlice.actions;
export default listSlice.reducer;
