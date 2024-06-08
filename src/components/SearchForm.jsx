import React, { useEffect, useState } from "react";
import { CustomCard } from "./CustomCard.jsx";
import { fetchFromAPI } from "../helpers/axiosHelper.js";
import { randomChar } from "../helpers/helpers.js";

export const SearchForm = ({ addToMovieList }) => {
  const [search, setSearch] = useState("");
  const [searchedMovie, setSearchedMovie] = useState({});

  useEffect(() => {
    const userSearch = randomChar();
    fetchMovie(userSearch);
  }, []);

  const fetchMovie = async (str) => {
    const movie = await fetchFromAPI(str);
    setSearchedMovie(movie);
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const movieType = (mode) => {
    addToMovieList({ ...searchedMovie, mode });
    // reset searched Movie
    setSearchedMovie({});
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    fetchMovie(search);
  };

  const handleOnDelete = () => {
    setSearchedMovie({});
  };

  return (
    <div className=" ps-5 pe-5 rounded shadow-lg ">
      <div className="row g-3">
        <div className="col-md-6">
          <form action="" onSubmit={handleOnSubmit}>
            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search Movie Name..."
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="d-grid">
              <button className="btn btn-warning">Search Movie</button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          {searchedMovie.Response === "True" && (
            <div className="w-100">
              <CustomCard
                searchedMovie={searchedMovie}
                movieType={movieType}
                handleOnDelete={handleOnDelete}
              />
            </div>
          )}
          {searchedMovie.Response === "False" && (
            <div className="">Movie Not found</div>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
};
