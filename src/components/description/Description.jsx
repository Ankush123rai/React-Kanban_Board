import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import DescriptionIcon from '@mui/icons-material/Description';
import ListIcon from '@mui/icons-material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PaymentIcon from '@mui/icons-material/Payment';
import { editCard } from '../features/listSlice';
import DescriptionText from './DescriptionText';
import Activity from './Activity';
import styles from './Description.module.css';

export default function Description() {
  const [title, setTitle] = useState(window.t);
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();

  const handleTitle = () => {
    const id = window.id;
    const lid = window.lid;

    dispatch(editCard({ listId: lid, cardId: id, title: title }));
    setEditing(false);
  };

  return (
    <div className={styles.main_container}>
      <Box
        sx={{
          display: 'flex',
          '& > :not(style)': {
            m: 1,
            width: 500,
            height: 600,
            padding: 3,
            gap: 2,
            flexDirection: 'column',
            flexWrap: 'wrap',
            borderRadius: 5,
          },
        }}
      >
        <Paper elevation={3} className={styles.paper}>
          <Link to="/" className={styles.close_button}>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </Link>

          <div className={styles.main}>
            <div className={styles.title_container}>
              <PaymentIcon className={styles.icons} />
              {editing ? (
                <TextField
                  size="small"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  onBlur={() => handleTitle()}
                  autoFocus
                  className={styles.title_input}
                />
              ) : (
                <Typography variant="h6" onClick={() => setEditing(true)} component="h5" className={styles.title}>
                  {title}
                </Typography>
              )}
            </div>

            <div className={styles.description_container}>
              <div className={styles.description_header}>
                <DescriptionIcon className={styles.description_icon} />
                <Typography variant="h6" component="h5" className={styles.description_title}>
                  Description
                </Typography>
              </div>
              <DescriptionText />
            </div>
            <div className={styles.activity_container}>
              <div className={styles.activity_header}>
                <ListIcon fontSize="large" className={styles.activity_icon} />
                <Typography variant="h6" component="h2" className={styles.activity_title}>
                  Activity
                </Typography>
              </div>
              <Activity />
            </div>
          </div>
        </Paper>
      </Box>
    </div>
  );
}
