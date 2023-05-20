import{ useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './card.module.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Description from '../../components/description/Description';
import { useSelector } from 'react-redux';


const Card=({ title },{listid})=>{
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
    
  const handleNavigate = (card) => {
    navigate(`/task/${card.id}-${card.title}`, { state: { task: card.title } ,});
          
  };
      

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCardClick = () => {
    handleNavigate(title);
    handleOpen();
    window.tag=title
    window.t=title
    
  
  };
  
  return (
    <>
      <div >
        <Link onClick={handleCardClick} style={{border:'none'}} to={`description/:${title}`}>
          <p style={{border:'none'}}>{title}</p>
        </Link>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={style.dailogBox}>
          
         <Description />
        </Box>
      </Modal>
    </>
  );
}

export default Card;