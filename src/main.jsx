import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { VideoGamesProvider } from './context/VideoGamesProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VideoGamesProvider>
      <App />
    </VideoGamesProvider>
  </React.StrictMode>
);
