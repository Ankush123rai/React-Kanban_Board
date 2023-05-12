import React from "react";
import style from '../mainCard/MainCard.module.css'
import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/CardSlice";
import { v4 as uuidv4 } from "uuid";


function InputCard() {
    const dispatch = useDispatch();
    const reduxData = useSelector((state) => state.CardList);
    
    const handleAddList = (event,) => {
        event.preventDefault();
        const title = event.target.title.value;
        const id = uuidv4();
        dispatch(add({ id, title, card:[] }));
        event.target.reset();
      
    }


return(
    <div className={style.inputCard}>
        <form className={style.inputForm} onSubmit={handleAddList}>
            <input type="text" name="title" placeholder="Enter list title..." />
            <button className={style.add_button} type="submit">
            Add List
            </button>
        </form>
    </div>

)

}
export default InputCard;