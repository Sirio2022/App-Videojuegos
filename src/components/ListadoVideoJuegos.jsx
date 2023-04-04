import { Grid, Typography } from '@mui/material';
import VideoJuego from './VideoJuego';
import useVideoGames from '../hooks/useVideoGames';

export default function ListadoVideoJuegos() {
  const { videoGames } = useVideoGames();

  return (
    <>
      <Typography
        textAlign={'center'}
        marginY={5}
        fontWeight={'bold'}
        component={'h1'}
        variant="h3"
      >
        Listado de VideoJuegos
      </Typography>

        <Grid container spacing={2}>
            {videoGames.length > 0 ? (
                videoGames.map((videoGame) => (
                    <VideoJuego key={videoGame.id} videoGame={videoGame} />
                ))
            ) : (
                <Typography>    
                    No hay videojuegos
                </Typography>
            )}
        </Grid>
    </>
  );
}
