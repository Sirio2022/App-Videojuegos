import { Container, Grid, Typography } from '@mui/material';
import Formulario from './components/Formulario';
import FormularioPlat from './components/FormularioPlat';

function App() {
  return (
    <Container>
      <header>
        <Typography
          align="center"
          fontWeight="bold"
          component="h1"
          variant="h3"
          marginY={5}
        >
          Buscador de VideoJuegos
        </Typography>
      </header>

      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} md={6}>
          <Formulario />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormularioPlat />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
