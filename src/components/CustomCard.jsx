import React, { useState } from "react";

//http://www.omdbapi.com/?i=tt3896198&apikey=32ffc322&

export const CustomCard = ({ searchedMovie, movieType, handleOnDelete }) => {
  const { Poster, Title, Plot, imdbRating, imdbID, mode } = searchedMovie;
  return (
    <div className="card " style={{ maxWidth: "394px", maxHeight: "485px" }}>
      <img
        src={Poster}
        className="card-img-top"
        alt="..."
        style={{ height: "200px" }}
      />
      <div className="container d-flex flex-grow-1 flex-column justify-content-between">
        <div className="card-body">
          <h6 className="card-title">{Title}</h6>
          <p className="card-text">IMDB Rating: {imdbRating}</p>
          <p className="card-text">{Plot?.slice(0, 80)}...</p>
        </div>
        {!mode && (
          <div className="d-grid gap-2">
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

        <div className="d-grid mt-2 pb-3">
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
