import React from 'react';
import NavBar from './components/navigation/NavBar';
import TitleBanner from './components/TitleBanner';
import MovieList from './components/MovieList';
import ListIcon from './components/ListIcon';

function App() {
  return (
    <div>
      <NavBar/>
      <TitleBanner />
      <ListIcon />
      <MovieList/>
    </div>
  );
}

export default App;
