import React,{useState} from 'react'
import style from './InputCard.module.css'
import { useDispatch} from "react-redux";
import { addList, addCard } from '../features/listSlice';
import { v4 as uuid } from 'uuid';'  '
import AddList from '../../atoms/AddList'


const InputCard = ({type,listId}) => {
  const [title, setTitle] = useState('');
  const [toggle, setToogle]=useState(false)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title==""){
      setToogle(!toggle)
    }
    const id2 = uuid();
    if(type){
        dispatch(addCard({ title:title, listId: listId}))
        }else
    if(title){
        dispatch(addList({id2, title:title}))
        }
        setTitle('')
  }

  return (
    
    <div className={style.container}>
    
      <form onSubmit={handleSubmit}>
      
      <div className={style.inputForm}>
      {type === 'card' ? 
          <input 
            type="text" 
            placeholder="Enter list title..." 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />:
            
          <input
            type="text"
            placeholder="Enter a title for this card..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
      }
        <button 
          type="submit">
          {type=="card" ?"Add Card": 'Add List'}
        </button>
      </div>
      </form>
     
    </div>
  )
}

export default InputCard