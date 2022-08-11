import React from "react";
import { movies } from "../data";

function Movies() {
  
  const movieList = movies.map(movie => {
    const genreList = movie.genres.map(genre => 
      <li key={genre}>{genre}</li>)
      return( 
      <div key={movie.title}>
        <h3>Name: {movie.title}</h3>
        <p>Time: {movie.time}</p>
        
          Genres:
          <ul>
        {genreList}
        </ul>
        
        
      </div>)
  }
    
   
    )
  // This component should render the text Movies Page in an <h1>, 
  // and make a new <div> for each movie. 
  // The <div> should contain the movie's title, time and a <ul> with a list of its genres, each within their own <li>.
  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  )
}

export default Movies;
