import React from 'react';
import style from './AddList.module.css'
import { AiOutlinePlus } from "react-icons/ai"

const AddList = ({setToggle, toggle}) => {
    return (
        <div>
            <div className={style.add_list} onClick={()=>setToggle(!toggle )}>
                <AiOutlinePlus />
                <span>Add a List</span>
            </div>
        </div>
    )
}

export default AddList