import * as React from 'react';
import { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ videoGame }) {
  const { name, released, background_image, rating, platforms } = videoGame; //Aca no habra el Id? porque no se esta pasando como parametro, y no se esta trayendo en el componente, y se esta usando en el useEffect.
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [VGdetalle, setVGdetalle] = useState({});

  useEffect(() => {
    const url = `https://api.rawg.io/api/games/${videoGame.id}?&key=${
      import.meta.env.VITE_API_KEY
    }`;
    const getVGdetalle = async () => {
      const { data } = await axios.get(url);
      setVGdetalle(data.description_raw);
    };
    getVGdetalle();
  }, [VGdetalle]);

  return (
    <div>
      <Button onClick={handleOpen}>detalles</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <CardMedia
              component="img"
              alt={`Imagen de ${name}`}
              image={background_image}
              height="350"
            />
            <Typography gutterBottom variant="h5" component="div" marginY={2}>
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Fecha de lanzamiento:</strong> {released}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Rating: </strong>
              {rating}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Plataformas:</strong>{' '}
              {platforms?.map((platform) => platform.platform.name).join(', ')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Descripción:</strong> {VGdetalle}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
