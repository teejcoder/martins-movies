import React from 'react';
import { FaStar } from "react-icons/fa";
import MoreInfoButton from './buttons/MoreInfoButton';

const MovieComponent = ({ movie }) => {
  // Truncate the overview text if it exceeds a certain length
  const truncatedOverview = movie.overview.length > 100 ? `${movie.overview.substring(0, 100)}...` : movie.overview;

  return (
    <div className='h-full m-2 rounded overflow-hidden flex flex-col transition duration-300 transform hover:-translate-y-2'>
      {/* Movie image half */}
      <div className='flex-1'>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt='Movie Poster' className='w-full h-full object-cover' />
      </div>

      {/* Movie description half */}
      <div className='pl-6 pr-6 pb-6 flex-1 bg-white'>
        {/* Movie title */}
        <h2 className='text-3xl font-medium color-title pt-10 pb-4'>{movie.original_title}</h2>
        {/* Rating */}
        <div className='flex justify-between mb-4'>
          <span className='flex justify-center items-center text-sm color-gray-400'>
            <FaStar className='mr-1' color='gold'/> 
            {((Math.round(movie.vote_average * 100) / 100).toFixed(2))} / 10
          </span>

          <span className='flex text-sm color-gray-400'>
            {movie.genres}
          </span>
        </div>
        
        {/* Overview text with ellipsis */}
        <p className='overflow-hidden overflow-ellipsis pb-4'>{truncatedOverview}</p>

        <MoreInfoButton />
      </div>
    </div>
  );
};

export default MovieComponent;
