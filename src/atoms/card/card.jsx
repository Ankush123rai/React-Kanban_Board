
import{ useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './card.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const Card=({ title })=>{
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNavigate = (card) => {
    navigate(`/task/${card.id}-${card.title}`, { state: { task: card.title } });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <>
      <div className={style.cards}>
       
          <p>{title}</p>
        
      </div>
      
    </>
  );
}

export default Card;