import React, { useState } from "react";
import style from "./MainCard.module.css";
import InputCard from "../inputCard/InputCard";

import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/CardSlice";
import AddList from "../../atoms/AddList";
import { v4 as uuidv4 } from "uuid";
// import {Menu} from '@mui/material/Menu';
// import {MenuItem} from '@mui/material/MenuItem'

function MainCard() {
  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state.CardList);
  console.log(reduxData.cards);

  const [toggle, setToggle] = useState(false);

  const handleAddList = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const id = uuidv4();
    dispatch(add({id, title: title, cards: [] }));
    event.target.reset();

  };
  return (
    <div className={style.container}>
      <div className={style.lists_container}>
        {reduxData.map((list, index) => (
          <div className={style.list} key={index}>
            <div className={style.list_heading}>
              <h3>{list.title}</h3>
            

      {/* <p onClick="">
        Dashboard
      </p>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Achieve</MenuItem> 
      </Menu> */}
    

            </div>
            <div className={style.list_cards}>
              {list.cards.map((card, index) => (
                <div className={style.card} key={card.id}>
                  <p>{card.title}</p>
                </div>
              ))}

              <InputCard/>
              
            </div>
          </div>
        ))}
      </div>
        
        { toggle ?
      <form className={style.inputForm} onSubmit={handleAddList}>
        <input type="text" name="title" placeholder="Enter list title..." />
        <button className={style.add_button} type="submit">
          Add List
        </button>
      </form>:

      <AddList setToggle={setToggle}  toggle={toggle}/>
        }
    </div>
  );
}

export default MainCard;
