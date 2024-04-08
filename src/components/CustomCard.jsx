import React, { useState } from "react";

//http://www.omdbapi.com/?i=tt3896198&apikey=32ffc322&

export const CustomCard = ({ searchedMovie, movieType, handleOnDelete }) => {
  const { Poster, Title, Plot, imdbRating, imdbID, mode } = searchedMovie;
  return (
    <div className="card flex-grow-1" style={{ width: "18rem" }}>
      <img src={Poster} className="card-img-top" alt="..." />
      <div className="container">
        <div className="card-body">
          <h6 className="card-title">{Title}</h6>
          <p className="card-text">IMDB Rating: {imdbRating}</p>
          <p className="card-text">{Plot?.slice(0, 50)}...</p>
        </div>
        {!mode && (
          <div className="d-flex justify-content-between gap-2">
            <button
              className="btn btn-warning flex-grow-1"
              onClick={() => movieType("drama")}
            >
              Drama
            </button>
            <button
              className="btn btn-info flex-grow-1"
              onClick={() => movieType("action")}
            >
              Action
            </button>
          </div>
        )}

        <div className="d-grid mt-2 mb-4">
          <button
            onClick={() => handleOnDelete(imdbID)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
