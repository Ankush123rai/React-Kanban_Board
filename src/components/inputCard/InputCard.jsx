import React,{useState} from 'react'
import style from './InputCard.module.css'
import { useDispatch} from "react-redux";
import { addList, addCard } from '../features/listSlice';
import { v4 as uuid } from 'uuid';


const InputCard = ({type,listId}) => {
  const [title, setTitle] = useState('');
  const [toggle, setToggle]=useState(false)
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [error, setError]=useState(true)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title!==""){    
    const id2 = uuid();
    if(type){
        dispatch(addCard({ title:title, listId: listId}))
        }else
    if(title){
        dispatch(addList({id2, title:title}))
        }
        setTitle('')
        setError(true)
  }
    else{
      setError(false)
    }
  }
  const openForm = () => {
    setIsFormVisible(true);
  };
  const handleToggle=()=>{
    setToggle(!toggle)
    
  }

  return (
    
    <div className={style.container}>
     <div style={{display:toggle?"none":""}} onClick={handleToggle} className={style.initial_div}>
      <button onClick={openForm} className={style.initial_btn}>
        + Add {type ? "a card" : "another list"}
      </button>
      </div>

      {isFormVisible && (
      <form onSubmit={handleSubmit}>
  
      <div className={error ? style.inputForm: style.errorForm}>
      {type === 'card' ? 
 
          <input
            type="text"
            placeholder="Enter a title for this card..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />:
          <input 
            type="text" 
            placeholder="Enter list title..." 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
      }
        <button 
          type="submit">
          {type==="card" ?"Add Card": 'Add List'}
        </button>
      </div>
      </form>
     )}
    </div>
  )
}

export default InputCard