import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import useVideoGames from '../hooks/useVideoGames';

export default function Formulario() {
  const { generos, genero, handleChangeGenero } = useVideoGames();

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Género</InputLabel>
        <Select label="Genero" onChange={handleChangeGenero} value={genero}>
          {generos.length > 0 ? (
            generos.map((genero) => (
              <MenuItem key={genero.id} value={genero.name}>
                {genero.name}
              </MenuItem>
            ))
          ) : (
            <MenuItem value="Action">Action</MenuItem>
          )}
        </Select>
      </FormControl>
    </form>
  );
}
