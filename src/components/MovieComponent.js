import React, { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";
import MoreInfoButton from './buttons/MoreInfoButton';

const MovieComponent = ({ movie }) => {
  const [isWatched, setIsWatched] = useState(false);

  useEffect(() => {
    const watchedStatus = localStorage.getItem(`watched_${movie.id}`);
    if (watchedStatus !== null) {
      setIsWatched(watchedStatus === 'true');
    }
  }, [movie.id]);

  const handleWatchedClick = () => {
    const newWatchedState = !isWatched; 
    setIsWatched(newWatchedState);
    localStorage.setItem(`watched_${movie.id}`, newWatchedState.toString());
  };

  // Destructure movie data
  const { original_title, backdrop_path, overview, vote_average, original_language, imdb_id } = movie;

  // Handle missing or incomplete data
  const imageUrl = backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path}` : 'placeholder-image-url.jpg';
  const movieTitle = original_title || 'Unknown Title';
  const movieOverview = overview || 'No overview available';
  const truncatedOverview = movieOverview.length > 100 ? `${movieOverview.substring(0, 100)}...` : movieOverview;

  return (
    <div className='h-full w-fit m-1 rounded overflow-hidden flex flex-col transition duration-300 transform hover:-translate-y-2'>
      
      {/* Movie image half */}
      {backdrop_path && (
        <div className='flex-1 relative'>
          <img src={imageUrl} alt='Movie Poster' className='w-full h-full object-cover' />
        </div>
      )}

      {/* Movie description half */}
      <div className='pl-6 pr-6 pb-6 flex-1 bg-white relative'>
        {/* Play title - Conditional rendering */}
        {backdrop_path && (
          <div className='w-14 h-14 absolute top-0 right-0 transform -translate-y-8 mr-8 z-10 text-white bg-purple shadow-xl rounded-full cursor-pointer flex items-center justify-center'>
            <IoMdPlay size={18} />
          </div>
        )}

        {/* Movie title */}
        <h2 className='text-3xl font-medium pt-10 pb-4'>{movieTitle}</h2>
        {/* Rating */}
        <div className='flex justify-between mb-4'>
          <span className='flex justify-center items-center text-sm text-gray-400'>
            <FaStar className='mr-1' color='gold'/> 
            {((Math.round(vote_average * 100) / 100).toFixed(2)) || 'N/A'} / 10
          </span>
          <span className='h-8 w-8 flex items-center justify-center text-sm text-black border-purple bg-palePurple border rounded-full'>
            {original_language ? original_language.toUpperCase() : 'N/A'}
          </span>
        </div>
        
        {/* Overview text with ellipsis */}
        <p className='overflow-hidden overflow-ellipsis text-gray-400 pb-4'>{truncatedOverview}</p>
        
        <div className='flex items-center justify-between'>

        {movie.imdb_id && <MoreInfoButton imdbLink={`https://www.imdb.com/title/${movie.imdb_id}`} />}
        
          <button
            className={`w-24 h-8 bg-green text-sm text-white font-bold rounded flex items-center justify-center ${
              isWatched ? 'bg-green' : 'bg-purple'
            }`}
            onClick={handleWatchedClick}
          >
            <p>{isWatched ? 'Watched.' : 'Watched?'}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;
