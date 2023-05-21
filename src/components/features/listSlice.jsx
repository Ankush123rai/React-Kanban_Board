import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";


const listSlice = createSlice({
  name: "lists",
  initialState: {
    lists: [],
  },
  reducers: {


    addList: (state, action) => {
      const { title } = action.payload;
      state.lists.push({ id: uuid(), title });
    },
    deleteList: (state, action) => {
      state.lists = state.lists.filter((item) => item.id !== action.payload);
    },

    editList: (state, action) => {
      const { id, title } = action.payload;
      const list = state.lists.find((item) => item.id === id);
      if (list) {
        list.title = title;
      }
    },


    addCard: (state, action) => {
      const { listId, title } = action.payload;
      const list = state.lists.find((item) => item.id === listId);
      if (list) {
        if (!list.task) {
          list.task = [];
        }
        list.task.push({ id: uuid(), title });
      }
    },
    deleteCard: (state, action) => {
      const { listId, cardId } = action.payload;
      const list = state.lists.find((item) => item.id === listId);
      if (list) {
        list.task = list.task.filter((item) => item.id !== cardId);
      }
    },
    editCard: (state, action) => {
      const { listId, cardId, title } = action.payload;
      const list = state.lists.find((item) => item.id === listId);
      if (list) {
        const card = list.task.find((item) => item.id === cardId);
        if (card) {
          card.title = title;
        }
      } 
    },
    
    reorderLists: (state, action) => {
      const { startIndex, endIndex } = action.payload;
      const [removed] = state.lists.splice(startIndex, 1);
      state.lists.splice(endIndex, 0, removed);
    },
    reorderCards: (state, action) => {
      const { listId, startIndex, endIndex } = action.payload;
      const list = state.lists.find((list) => list.id === listId);
      if (list) {
        const [removed] = list.task.splice(startIndex, 1);
        list.task.splice(endIndex, 0, removed);
      }
    },
    moveCardAcrossLists: (state, action) => {
      const { sourceListId, destListId, sourceIndex, destIndex, cardId } =
        action.payload;
      const sourceList = state.lists.find((list) => list.id === sourceListId);
      const destList = state.lists.find((list) => list.id === destListId);

      if (sourceList && destList) {
        const [removed] = sourceList.task.splice(sourceIndex, 1);
        const card = {
          id: cardId,
          title: removed.title,
        };
        destList.task.splice(destIndex, 0, card);
      }
    },
  },
});

export const {
  addList,
  deleteList,
  addCard,
  reorderLists,
  reorderCards,
  moveCardAcrossLists,
  deleteCard,
  editCard,
  editList,
} = listSlice.actions;

export default listSlice.reducer;