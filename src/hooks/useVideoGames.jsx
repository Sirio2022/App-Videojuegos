import { useContext } from 'react';
import VideoGamesContext from '../context/VideoGamesProvider';

const useVideoGames = () => {
  return useContext(VideoGamesContext);
};

export default useVideoGames;
