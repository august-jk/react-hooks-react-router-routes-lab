import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsList = actors.map(actor => {
    const movieList = actor.movies.map(movie => <li key={movie}>{movie}</li>)
    return (
      <div key={actor.name}>
        <h3>Name: {actor.name}</h3>
        
          Movies:
          <ul>{movieList}</ul>
        
      </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  )
}

export default Actors;
