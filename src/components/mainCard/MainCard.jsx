import React, { useState } from "react";
import style from "./MainCard.module.css";



import { useDispatch, useSelector } from "react-redux";
import { addList, deleteList, addCard } from '../features/listSlice';
import { v4 as uuidv4 } from "uuid";
import InputCard from "../inputCard/InputCard";
import AddList from "../../atoms/AddList";


function MainCard() {
  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state.lists);
  // console.log(reduxData);
 
  const [toggle, setToggle] = useState(false);

  const handleAddList = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const id = uuidv4();
    if (title !== "") {
      dispatch(addList({ title, id }));
      event.target.title.value = "";
    }
    else{
      setToggle(!toggle)
    }

  };
  return (
    <div className={style.container}>

      <div className={style.lists_container}>
        {reduxData.map((list) => (
          <div className={style.list_container} key={list.id}>
            <div className={style.list_title}>
              <h3>{list.title}</h3>
              <button
                className={style.delete_button}
                onClick={() => dispatch(deleteList(list.id))}
              >
                X
              </button>
              </div>
             

           </div>

        ))}
      </div>
     
      <InputCard/>
       
      
     {toggle ? 
      <form className={style.addForm} onSubmit={handleAddList}>
        <input type="text" name="title" placeholder="Enter list title..." />
        <button className={style.add_button} type="submit">
          Add List
        </button>
      </form>:
      <AddList toggle={toggle} setToggle={setToggle}/>
     }
        
    </div>
  );
}

export default MainCard;
