import React, { useEffect, useState } from "react";
import { CustomCard } from "./CustomCard";

export const Display = ({ movieList, handleOnDelete }) => {
  const [displayMovie, setDisplayMovie] = useState([]);

  useEffect(() => {
    setDisplayMovie(movieList);
  }, [movieList]);

  const filterMovie = (mode) => {
    if (mode === "all") return setDisplayMovie(movieList);

    const filterList = movieList?.filter((item) => item.mode === mode);
    setDisplayMovie(filterList);
  };

  return (
    <div className=" mb-2 rounded-4">
      <div className="py-2 px-5">
        <hr />
        <div
          className="btn-group "
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            onClick={() => filterMovie("all")}
            type="button"
            className="btn btn-primary"
          >
            All
          </button>
          <button
            onClick={() => filterMovie("drama")}
            type="button"
            className="btn btn-warning"
          >
            Drama
          </button>
          <button
            onClick={() => filterMovie("action")}
            type="button"
            className="btn btn-info"
          >
            Action
          </button>
        </div>

        <div className="">
          <p className="mt-3">{displayMovie.length} movies listed</p>
        </div>
      </div>

      <div className="row px-5 g-2">
        {displayMovie.map((movie) => {
          return (
            <div
              className="col-xxl-2 col-lg-3 col-md-4 col-sm-6"
              key={movie.imdbID}
            >
              <CustomCard
                searchedMovie={movie}
                handleOnDelete={handleOnDelete}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
