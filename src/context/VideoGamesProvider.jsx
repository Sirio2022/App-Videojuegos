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
      const url = `https://api.rawg.io/api/games?&page_size=40&search=genres=${genero}=platform=${plataforma}&key=${
        import.meta.env.VITE_API_KEY
      }`;
      const url2 = `https://api.rawg.io/api/games?&page_size=40&search=genres=${genero}=platform=${plataforma}&key=${
        import.meta.env.VITE_API_KEY
      }&page=2`;
      const url3 = `https://api.rawg.io/api/games?&page_size=40&search=genres=${genero}=platform=${plataforma}&key=${
        import.meta.env.VITE_API_KEY
      }&page=3`;
      const url4 = `https://api.rawg.io/api/games?&page_size=40&search=genres=${genero}=platform=${plataforma}&key=${
        import.meta.env.VITE_API_KEY
      }&page=4`;
      const url5 = `https://api.rawg.io/api/games?&page_size=40&search=genres=${genero}=platform=${plataforma}&key=${
        import.meta.env.VITE_API_KEY
      }&page=5`;

      const [data, data2, data3, data4, data5] = await Promise.all([
        axios.get(url),
        axios.get(url2),
        axios.get(url3),
        axios.get(url4),
        axios.get(url5),
      ]);

      setVideoGames([
        ...data.data.results,
        ...data2.data.results,
        ...data3.data.results,
        ...data4.data.results,
        ...data5.data.results,
      ]);
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
        videoGames,
      }}
    >
      {children}
    </VideoGamesContext.Provider>
  );
};

export { VideoGamesProvider };

export default VideoGamesContext;
