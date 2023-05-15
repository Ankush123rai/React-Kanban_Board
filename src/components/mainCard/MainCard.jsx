import React, { useState ,useEffect} from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import style from "./MainCard.module.css";
import { Link } from 'react-router-dom'

function MainCard(props) {
  const [lists, setLists] = useState([]);
   
   
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }   
    const sourceListIndex = result.source.droppableId;
    const destinationListIndex = result.destination.droppableId;
    const sourceList = lists[sourceListIndex];
    const destinationList = lists[destinationListIndex];

    if (sourceListIndex === destinationListIndex) {
      const newCards = [...sourceList.cards];
      const [removedCard] = newCards.splice(result.source.index, 1);
      newCards.splice(result.destination.index, 0, removedCard);

      const newLists = [...lists];
      newLists[sourceListIndex] = { ...sourceList, cards: newCards };
      setLists(newLists);
    } else {
      const sourceCards = [...sourceList.cards];
      const [removedCard] = sourceCards.splice(result.source.index, 1);
      const destinationCards = [...destinationList.cards];
      destinationCards.splice(result.destination.index, 0, removedCard);

      const newLists = [...lists];
      newLists[sourceListIndex] = { ...sourceList, cards: sourceCards };
      newLists[destinationListIndex] = {
        ...destinationList,
        cards: destinationCards,
      };
      setLists(newLists);
    }
  };

  const addList = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    setLists([...lists, { title, cards: [] }]);
    event.target.reset();
   
  };
     
 
  const addCard = (event, index) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const newLists = [...lists];
    newLists[index].cards.push({ title });
    setLists(newLists);
    event.target.reset();
   tag=title
   
  
  };
  

  const onListDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;
    const [removedList] = lists.splice(sourceIndex, 1);
    lists.splice(destinationIndex, 0, removedList);
    setLists([...lists]);
  };
  return (
    <div className={style.container}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={style.lists_container} >
          {lists.map((list, index) => (
            <Droppable droppableId={index.toString()} key={index}>
              {(provided, snapshot) => (
                <div 
                  className={style.list}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <div 
                    
                    {...provided.dragHandleProps}
                  >
                    

                  </div>
                  <div className={style.list_cards} style={{backgroundColor:'white',borderRadius:'1rem'}}>
                  <h2>{list.title}</h2>
                    {list.cards.map((card, index) => (
                      <Draggable
                        key={index}
                        draggableId={`${index}_${list.title}`}
                        index={index}
                        
                      >
                        {(provided) => (
                          <div 
                            className={style.card}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                          
                            <Link style={{color: "inherit",textDecoration:'none'}} to={`description/:${card.title}`}> <p  >{card.title}</p></Link>
                            
                          </div>
                        )}
                      </Draggable>
                    ))}
                    <form 
                      className={style.inputForm}   
                      onSubmit={(event) => addCard(event, index) }
                    >
                      <textarea 
                        type="text"
                        name="title"
                        placeholder="Enter card title..."
                        
                      />
                      <button type="submit">Add Card</button>
                    </form>
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
      <form className={style.inputForm} onSubmit={addList}>
        <input type="text" name="title" placeholder="Enter list title..." />
        <button className={style.add_button} type="submit">
          Add List
        </button>
      </form>
      
    </div>
    
  );
}
export default MainCard