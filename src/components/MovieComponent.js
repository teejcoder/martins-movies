import React, { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import MoreInfoButton from './buttons/MoreInfoButton';
import WatchedButton from './buttons/WatchedButton';

const MovieComponent = ({ movie }) => {
  // Truncate the overview text if it exceeds a certain length
  const truncatedOverview = movie.overview.length > 100 ? `${movie.overview.substring(0, 100)}...` : movie.overview;

  // State to manage watched status for each movie
  const [isWatched, setIsWatched] = useState(false);

  // Effect to load watched status from localStorage
  useEffect(() => {
    const watchedStatus = localStorage.getItem(`watched_${movie.id}`);
    if (watchedStatus !== null) {
      setIsWatched(watchedStatus === 'true');
    }
  }, [movie.id]);

  // Function to handle watched button click
  const handleWatchedClick = () => {
    const newWatchedState = !isWatched; // Toggle the watched state
    setIsWatched(newWatchedState);
    // Store the updated watched status in localStorage
    localStorage.setItem(`watched_${movie.id}`, newWatchedState.toString());
  };

  return (
    <div className='h-full w-68 m-2 rounded overflow-hidden flex flex-col transition duration-300 transform hover:-translate-y-2'>
      {/* Movie image half */}
      <div className='flex-1'>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt='Movie Poster' className='w-full h-full object-cover' />
      </div>

      {/* Movie description half */}
      <div className='pl-6 pr-6 pb-6 flex-1 bg-white'>
        {/* Movie title */}
        <h2 className='text-3xl font-medium pt-10 pb-4'>{movie.original_title}</h2>
        {/* Rating */}
        <div className='flex justify-between mb-4'>
          <span className='flex justify-center items-center text-sm text-gray-400'>
            <FaStar className='mr-1' color='gold'/> 
            {((Math.round(movie.vote_average * 100) / 100).toFixed(2))} / 10
          </span>

          <span className='flex text-sm text-gray-400'>
            {movie.genres}
          </span>
        </div>
        
        {/* Overview text with ellipsis */}
        <p className='overflow-hidden overflow-ellipsis text-gray-400 pb-4'>{truncatedOverview}</p>
        
        <div className='flex items-center justify-between'>
          <MoreInfoButton imdbLink={movie.imdb_id ? `https://www.imdb.com/title/${movie.imdb_id}` : null} />
          <button
            className={`w-24 h-8 bg-green text-sm text-white font-bold rounded flex items-center justify-center ${
              isWatched ? 'bg-green' : 'bg-purple'
            }`}
            onClick={handleWatchedClick}
          >
            <p>{isWatched ? 'Watched.' : 'Watch?'}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;