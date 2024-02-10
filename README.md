# Martin's Movies

**Link to project:** [Martin's Movies](https://martins-movie-reviews.netlify.app/)

![Martin's Movies Gif](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTVxZWMzY3hsa2t1aGVpcDFqYWw2bXVzcjVucHFmdWxpNGl5Zms5eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dPH8sAzA2lpPXyXLCx/giphy-downsized-large.gif)

## Project Overview:

Martin's Movies is a web application that allows users to search for movies and view information about them. The application fetches data from the TMDB API to provide movie details such as title, release date, and poster image.

To visit the project, click the link provided above. To contribute, clone this repository and start the engine with `npm install` or `yarn install`. Ensure to obtain an API key from the TMDB API and include it in the project's environment configuration.

## How It Works:

1. **Search Functionality:** Users can search for movies by entering a keyword in the search bar. The application then queries the TMDB API to retrieve relevant movie results based on the search term.

2. **Movie Listings:** The application displays a list of movies based on the search results or showcases popular movies if no search term is provided. Each movie is represented by a component containing its title, poster image, and release date.

3. **Pagination:** To enhance user experience, the movie list is paginated, allowing users to navigate through multiple pages of movie results.

4. **Dynamic Rendering:** The "More Info" button dynamically renders when IMDb information is available for a movie. This button provides users with additional details and links to the IMDb page of the respective movie. If no IMDb information is present, the button is not displayed in the DOM, ensuring a cleaner interface.

## Optimizations:

1. **Error Handling:** Improved error handling to gracefully handle cases where API requests fail or return empty data, preventing the application from crashing and providing informative error messages to users.

2. **Performance Optimization:** Implemented optimizations to minimize unnecessary re-renders and improve overall application performance, ensuring smooth navigation and interactions.

3. **Responsive Design:** Ensured that the application is fully responsive across various devices and screen sizes, providing a seamless experience for users on desktop and mobile devices.

## Lessons Learned:

1. **API Integration:** Gained more experience in integrating external APIs into a React application, including handling API requests, parsing response data, and updating component state accordingly.

2. **State Management:** Learned about managing component state in React, including using hooks like useState and useEffect to manage asynchronous data fetching and rendering.

3. **Error Handling:** Recognized the importance of implementing robust error handling mechanisms to handle potential failures gracefully and provide a better user experience.

4. **Pagination:** Explored different approaches to implementing pagination in React applications, understanding the trade-offs between client-side and server-side pagination and choosing the most suitable approach based on the project requirements.

Overall, Martin's Movies provided valuable insights into building interactive web applications with React while leveraging external APIs to fetch and display dynamic data.
