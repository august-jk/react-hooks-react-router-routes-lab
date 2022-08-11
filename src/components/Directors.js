import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsList = directors.map(director => {
    const movieList = director.movies.map(movie => 
     <li key={movie}>{movie}</li>
    )
    return (
      <div key={director.name}>
        <h3>Director: {director.name}</h3>
       
        Movies:
        <ul>{movieList}</ul>
      
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  )
}

export default Directors;
