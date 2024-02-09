import React, { useState, useEffect } from 'react';
import MovieComponent from './MovieComponent';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 6;

  useEffect(() => {
    const api_key = process.env.REACT_APP_TMDB_API_KEY;
    
    const getMovies = async () => {
      try {
        // Fetch the first page of movies
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=${currentPage}`);
        const data = await response.json();
        setMovies(data.results);
        // After setting the movies, fetch IMDb ID for each movie
        fetchIMDbIDs(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
        // Function to fetch IMDb ID for each movie
        const fetchIMDbIDs = async (movies) => {
          const updatedMovies = [];
          for (const movie of movies) {
            try {
              // Make API request to get IMDb ID using the movie ID
              const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/external_ids?api_key=${api_key}`);
              const data = await response.json();
              // Add IMDb ID to the movie object
              movie.imdb_id = data.imdb_id;
              updatedMovies.push(movie);
            } catch (error) {
              console.error(`Error fetching IMDb ID for movie ${movie.id}:`, error);
            }
          }
          // Update state with movies containing IMDb IDs
          setMovies(updatedMovies);
        };


    getMovies();
  }, [currentPage]); // Fetch movies when currentPage changes




  // Logic to calculate the index of the first and last movie on the current page
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Logic to paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className='bg-background flex flex-col items-center'>
      <div className='w-full grid grid-cols-3 gap-6 justify-center'>
        {currentMovies.map((movie) => (
          <MovieComponent key={movie.id} movie={movie} />
        ))}
      </div>
      <div className='flex mt-14 mb-20'>
        
        {/* Pagination buttons */}
        {Array.from({ length: Math.ceil(movies.length / moviesPerPage) }).map((_, index) => (
      <button
        key={index}
        onClick={() => paginate(index + 1)}
        className={`w-14 h-14 mr-4 p-4 rounded-full text-sm ${
          currentPage === index + 1 ? 'bg-purple text-white' : 'text-black'
        } transition-colors duration-500 hover:text-white hover:bg-purple`}
      >
        {index === 3 ? '>' : index + 1}
      </button>
        ))}
      </div>
  </section>
  );
};

export default MovieList;
