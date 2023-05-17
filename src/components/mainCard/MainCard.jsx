import React, { useState } from "react";
import style from "./MainCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import {deleteList } from '../features/listSlice';
import InputCard from "../inputCard/InputCard";
import Card from '../../atoms/card/card';
import { Link } from 'react-router-dom'



function MainCard() {
  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state.lists.lists);

  
 
      console.log(reduxData)

  
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
             <div className={style.card_container}>
             {list.task &&
                    list.task.map((task) => (
                      <div key={task.id} className={style.card}>
                     <Card title={task.title}/> 
                        {/* <p>{task.title}</p> */}

                      </div>
                    ))}
             </div>

            <div className={style.input_container}>
              <InputCard listId={list.id} type="card"/>
            </div>

           </div>

        ))}
      </div>
            <InputCard/>
    </div>
  );
}

export default MainCard;
