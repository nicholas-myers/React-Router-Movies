import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie"

const App = () => {
  const [savedList, setSavedList] = useState([]);
  // set state for movies list
  const addToSavedList = (movie) => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>


        <Route path="/">
          <MovieList />
        </Route>

        <Route path="/movies/:id">
          <Movie />
        </Route>
        
    
        
        
      </div>
    </div>
  );
};

export default App;
