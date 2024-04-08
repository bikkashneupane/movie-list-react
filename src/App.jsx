import "./App.css";
import React, { useState } from "react";

import { SearchForm } from "./components/SearchForm.jsx";
import { Display } from "./components/Display.jsx";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addToMovieList = (movie) => {
    const filteredList = movieList.filter(
      (item) => item.imdbID !== movie.imdbID
    );
    setMovieList([...filteredList, movie]);
  };

  const handleOnDelete = (imdbID) => {
    if (window.confirm("Confirm Delete")) {
      setMovieList(movieList.filter((item) => item.imdbID !== imdbID));
    }
  };

  return (
    <div className="container text-warning">
      <div className="row">
        <div className="col">
          <h1 className="mt-5 text-center">My Movie Collection</h1>
          <hr />
        </div>
      </div>

      <SearchForm addToMovieList={addToMovieList} />

      <Display movieList={movieList} handleOnDelete={handleOnDelete} />
    </div>
  );
}

export default App;
