import React, { useState } from "react";
import style from "./MainCard.module.css";

function MainCard() {
  const [lists, setLists] = useState([]);

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
  };

  return (
    <div className={style.container}>
    

      <div className={style.lists_container}>
        {lists.map((list, index) => (
          <div className={style.list} key={index}>
            <div className={style.list_heading}>
              <h2>{list.title}</h2>
            </div>
            <div className={style.list_cards}>
              {list.cards.map((card, index) => (
                <div className={style.card} key={index}>
                  <p>{card.title}</p>
                </div>
              ))}


              <form
                className={style.inputForm}
                onSubmit={(event) => addCard(event, index)}
              >
                <textarea
                  type="text"
                  name="title"
                  placeholder="Enter card title..."
                />
                <button type="submit">Add Card</button>
              </form>

              
            </div>
          </div>
        ))}
      </div>


      <form className={style.inputForm} onSubmit={addList}>
        <input 
          type="text" 
          name="title" 
          placeholder="Enter list title..." 
            
          />
        <button className={style.add_button} type="submit">
          Add List
        </button>
      </form>


    </div>
  );
}

export default MainCard;
