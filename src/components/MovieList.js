import React, { useState, useEffect } from 'react';
import MovieComponent from './MovieComponent';
import ListIcon from './ListIcon';

const moviesPerPage = 6;
const api_key = process.env.REACT_APP_TMDB_API_KEY;
// const url = "https://api.themoviedb.org/3/";

const MovieList = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    // Function to fetch movies based on the search term
    const getMoviesByKeyword = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchTerm}&page=1`);
        const data = await response.json();
        setMovies(data.results);
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching movies by keyword:', error);
      }
    };

    // Function to fetch most popular movies
    const getPopularMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=${currentPage}`);
        const data = await response.json();
        setMovies(data.results);
        fetchIMDbIDs(data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    // Fetch movies when the search term changes
    if (searchTerm.trim() !== '') {
      getMoviesByKeyword();
    } else {
      // If search term is empty, fetch most popular movies
      getPopularMovies();
    }
  }, [searchTerm, currentPage]); // Include currentPage in the dependency array

  // Function to fetch IMDb ID for each movie
  const fetchIMDbIDs = async (movies) => {
    const updatedMovies = [];
    for (const movie of movies) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/external_ids?api_key=${api_key}`);
        const data = await response.json();
        movie.imdb_id = data.imdb_id;
        updatedMovies.push(movie);
      } catch (error) {
        console.error(`Error fetching IMDb ID for movie ${movie.id}:`, error);
      }
    }
    setMovies(updatedMovies);
  };

  // Logic to calculate the index of the first and last movie on the current page
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Logic to paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='2xl:pr-96 2xl:pl-96 bg-background'>
      <section className='h-full w-full bg-background p-4 md:p-8 flex flex-col items-center'>
        {/* ListIcon component */}
        <div className='w-full mb-4'>
          <ListIcon />
        </div>
        
        <div className='w-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center'>
          {/* Movie components */}
          {currentMovies.map((movie) => (
            <MovieComponent key={movie.id} movie={movie} />
          ))}
        </div>

        {/* Pagination buttons */}
        <div className='flex mt-8'>
          {Array.from({ length: Math.ceil(movies.length / moviesPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`w-12 h-12 mr-2 p-2 rounded-full text-sm ${
                currentPage === index + 1 ? 'bg-purple text-white' : 'text-black'
              } transition-colors duration-500 hover:text-purple hover:bg-palePurple`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        
      </section>
    </div>
  );
};

export default MovieList;