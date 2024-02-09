import React, { useState } from 'react';
import NavBar from './components/navigation/NavBar';
import TitleBanner from './components/TitleBanner';
import MovieList from './components/MovieList';
import BottomBanner from './components/footer/BottomBanner';
import Footer from './components/footer/Footer';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <NavBar setSearchTerm={setSearchTerm} />
      <TitleBanner />
      <MovieList searchTerm={searchTerm} />
      <BottomBanner/>
      <Footer/>
    </div>
  );
}

export default App;
