import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie"
import axios from 'axios';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  // set state for movies list
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
          // console.log(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);


  const addToSavedList = (movie) => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
    
        <Route path="/">
          <MovieList movies={movies}/>
        </Route>
        <Route path="/movies/:id">
          <Movie />
        </Route>
        
        
        
      </div>
    </div>
  );
};

export default App;
