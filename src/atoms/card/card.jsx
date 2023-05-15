
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

  const handleCardClick = () => {
    handleNavigate(title);
    handleOpen();
  };

  return (
    <>
      <div className={style.cards}>
        <Link onClick={handleCardClick}>
          <p>{title}</p>
        </Link>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={style.dailogBox}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default Card;