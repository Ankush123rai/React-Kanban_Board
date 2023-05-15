import React,{useState} from 'react'
import style from '../inputCard/InputCard.module.css' 
import { useDispatch, useSelector} from 'react-redux'
import { addCard } from '../features/listSlice'
import { v4 as uuidv4 } from 'uuid';
import AddList from '../../atoms/AddList';

const InputCard = ({listId}) => {
    const [toggle, setToggle] = useState(false)
    const dispatch = useDispatch()
    const reduxData = useSelector((state) => state.lists)
    console.log(reduxData,listId)

    const handleAddCard = (event) => {
        event.preventDefault()
        const title = event.target.title.value
        const id = uuidv4()
       if(title!==''){
        dispatch(addCard({listId, title, id}))
        event.target.title.value = ""
       }
         else{
              setToggle(!toggle)
            }
    }

  return (
    <div>
        {reduxData.map((list) => (
            <div className={style.card_container} key={list.id}>
                {list.cards.map((card) => (
                    <div className={style.card} key={card.id}>
                        <p>{card.title}</p>
                        </div>
                ))}
                {toggle ? 
                    <form className={style.inputForm} onSubmit={handleAddCard}>
                        <input type="text" name="title" placeholder="Enter list title..." />
                        <button className={style.add_button} type="submit">
                        Add Card
                        </button>
                    </form>:
                    <AddList toggle={toggle} setToggle={setToggle}/>
                    }
                </div>
        ))}


    </div>
  )
}

export default InputCard