import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TransitionsModal  from './Modal'

export default function VideoJuego({ videoGame }) {
  const { name, released, background_image, rating, platforms } = videoGame;

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          alt={`Imagen de ${name}`}
          image={background_image}
          height="250"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Fecha de lanzamiento: {released}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rating: {rating}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Plataformas:{' '}
            {platforms?.map((platform) => platform.platform.name).join(', ')}
          </Typography>
          
          <TransitionsModal videoGame={videoGame}/>
        </CardContent>
      </Card>
    </Grid>
  );
}
