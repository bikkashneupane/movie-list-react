import React, { useEffect, useState } from "react";
import { CustomCard } from "./CustomCard.jsx";
import { fetchFromAPI } from "../helpers/axiosHelper.js";
import { randomChar } from "../helpers/helpers.js";

const initialState = "";

export const SearchForm = ({ addToMovieList }) => {
  const [search, setSearch] = useState(initialState);
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
    await fetchMovie(search);
  };

  const handleOnDelete = () => {
    setSearchedMovie({});
  };

  return (
    <div
      className="px-5 rounded shadow-lg "
      style={{
        minHeight: "50vh",
        backgroundImage: `url(https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className="row justify-content-center align-items-center"
        style={{
          minHeight: "50vh",
        }}
      >
        <div className="col-md-6">
          <div>
            <div className="text-warning text-center mb-5 ">
              <h3>Search Millions Of Movies</h3>
              <p>
                Find about the movie before putting them in your watchlist...
              </p>
            </div>

            <div className="mt-5">
              <form action="" onSubmit={handleOnSubmit} className="mt-4">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Movie Name..."
                    onChange={handleOnChange}
                    required
                  />
                  <button className="btn btn-warning">Search Movie</button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex justify-content-center mb-3">
            {searchedMovie?.Response === "True" && (
              <div>
                <CustomCard
                  searchedMovie={searchedMovie}
                  movieType={movieType}
                  handleOnDelete={handleOnDelete}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
