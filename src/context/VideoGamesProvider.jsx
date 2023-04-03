import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const VideoGamesContext = createContext();

const VideoGamesProvider = ({ children }) => {
  const [generos, setGeneros] = useState([]);
  const [plataformas, setPlataformas] = useState([]);

  const [genero, setGenero] = useState('Action');
  const [plataforma, setPlataforma] = useState('PC');

  const [videoGames, setVideoGames] = useState([]);

  useEffect(() => {
    const getVideoGames = async () => {
      const url = `https://api.rawg.io/api/games?&page_size=40&search=genres=${genero}=platforms=${plataforma}&key=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios.get(url);
      setVideoGames(data.results);
    };

    getVideoGames();
  }, [genero, plataforma]);

  useEffect(() => {
    const getGeneros = async () => {
      const url = ` https://api.rawg.io/api/genres?key=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios.get(url);
      setGeneros(data.results);
    };

    getGeneros();
  }, []);

  useEffect(() => {
    const getPlataformas = async () => {
      const url = ` https://api.rawg.io/api/platforms?key=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios.get(url);
      setPlataformas(data.results);
    };

    getPlataformas();
  }, []);

  function handleChangeGenero(e) {
    setGenero(e.target.value);
  }

  const handleChangePlataforma = (e) => {
    setPlataforma(e.target.value);
  };

  return (
    <VideoGamesContext.Provider
      value={{
        generos,
        plataformas,
        genero,
        handleChangeGenero,
        plataforma,
        handleChangePlataforma,
      }}
    >
      {children}
    </VideoGamesContext.Provider>
  );
};

export { VideoGamesProvider };

export default VideoGamesContext;
