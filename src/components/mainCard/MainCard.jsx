import React from "react"
import { useDispatch, useSelector } from "react-redux";
import {v4 as uuid} from "uuid"
import {
  deleteList,
  reorderLists,
  reorderCards,
  moveCardAcrossLists,
  editList,
  addCard,
  deleteCard,
} from "../features/listSlice";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import style from "./MainCard.module.css";
import InputCard from "../inputCard/InputCard";
import Card from "../../atoms/card/card";
import { MdDelete, MdEdit } from "react-icons/md";

function MainCard() {
  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state.lists.lists);
 

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination, draggableId, type } = result;

    if (type === "list") {
      dispatch(reorderLists(source.index, destination.index));
    } else if (type === "card") {
      const sourceListId = source.droppableId;
      const destListId = destination.droppableId;

      if (sourceListId === destListId) {
        dispatch(
          reorderCards({
            listId: sourceListId,
            startIndex: source.index,
            endIndex: destination.index,
          })
        );
      } else {
        dispatch(
          moveCardAcrossLists({
            sourceListId,
            destListId,
            sourceIndex: source.index,
            destIndex: destination.index,
            cardId: draggableId,
          })
        );
      }
    }
  };

  const handleEditList=(id)=>{
    const newTitle=prompt("Enter new title");
    if(newTitle !== ""){
      dispatch(editList({id,title:newTitle}))
    }
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className={style.container}>
        <Droppable droppableId="list-container" type="list">
          {(provided) => (
            <div
              className={style.lists_container}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {reduxData.map((list, index) => (
                <Draggable key={list.id} draggableId={list.id} index={index}>
                  {(provided) => (
                    <div
                      className={style.list_container}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      <div className={style.list_title}  {...provided.dragHandleProps}>
                        <h3
                          onClick={()=>handleEditList(list.id)}
                        >{list.title}</h3>

                        <MdDelete
                          className={style.delete_button}
                          onClick={() => dispatch(deleteList(list.id))}
                        />
                        
                      </div>

                      <Droppable droppableId={list.id} type="card">
                        {(provided) => (
                          <div
                            className={style.card_container}
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            {list.task &&
                              list.task.map((task, index) => (
                                <Draggable
                                  key={task.id}
                                  draggableId={task.id}
                                  index={index}
                                >
                                  {(provided) => (
                                    <div
                                      className={style.card}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      ref={provided.innerRef}
                                    >
                                   
                                      <div key={task.id}>
                                    <Card title={task.title}/> 
                                        {/* <p>{task.title}</p> */}

                                      </div>
                                      <div>
                                      <MdDelete onClick={() => dispatch(deleteCard({listId:list.id,cardId:task.id}))} 
                                        className={style.delete_button}
                                      />
                                      </div>
                                    </div>
                                  )}
                                </Draggable>
                              ))}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                      <div className={style.input_container}>
                        <InputCard listId={list.id} type="card" />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <InputCard />
      </div>
    </DragDropContext>
  );
}

export default MainCard;