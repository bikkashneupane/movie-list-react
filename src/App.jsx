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
    <>
      <div className="row px-5 pt-2">
        <h4 className="">Movie Watch List</h4>
        <hr />
      </div>

      <div
        className="container pb-1 "
        style={{
          marginTop: "20px",
          minWidth: "100vw",
        }}
      >
        <SearchForm addToMovieList={addToMovieList} />
        <Display movieList={movieList} handleOnDelete={handleOnDelete} />
      </div>
    </>
  );
}

export default App;
