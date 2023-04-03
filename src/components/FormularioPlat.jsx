import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import useVideoGames from '../hooks/useVideoGames';

export default function Formulario() {
  const { plataformas, plataforma, handleChangePlataforma } = useVideoGames();

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Plataforma</InputLabel>
        <Select
          label="Plataforma"
          onChange={handleChangePlataforma}
          value={plataforma}
        >
          {plataformas.length > 0 ? (
            plataformas.map((plataforma) => (
              <MenuItem key={plataforma.id} value={plataforma.name}>
                {plataforma.name}
              </MenuItem>
            ))
          ) : (
            <MenuItem value="PC">PC</MenuItem>
          )}
        </Select>
      </FormControl>
    </form>
  );
}
