import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

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
        <Switch>
          <Route path="/movies/:id">
            <Movie />
          </Route>
          <Route path="/">
            <MovieList />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
