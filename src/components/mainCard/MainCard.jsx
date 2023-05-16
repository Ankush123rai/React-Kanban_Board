import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteList,
  reorderLists,
  reorderCards,
  moveCardAcrossLists,
} from "../features/listSlice";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import style from "./MainCard.module.css";
import InputCard from "../inputCard/InputCard";
import Card from "../../atoms/card/card";
import { Link } from "react-router-dom";

function MainCard() {
  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state.lists.lists);
  console.log(reduxData);

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
                      <div className={style.list_title}>
                        <h3 {...provided.dragHandleProps}>{list.title}</h3>
                        <button
                          className={style.delete_button}
                          onClick={() => dispatch(deleteList(list.id))}
                        >
                          X
                        </button>
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
                                      <Link
                                        style={{
                                          color: "inherit",
                                          textDecoration: "none",
                                        }}
                                        to={`description/:${task.title}`}
                                      >
                                        <Card title={task.title} />
                                      </Link>
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
