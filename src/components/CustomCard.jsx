import React, { useState } from "react";

//http://www.omdbapi.com/?i=tt3896198&apikey=32ffc322&

export const CustomCard = ({ searchedMovie, movieType, handleOnDelete }) => {
  const { Poster, Title, Plot, imdbRating, imdbID, mode } = searchedMovie;
  return (
    <div
      className="card custom-card"
      style={
        !mode ? { maxWidth: "394px" } : { maxWidth: "394px", height: "470px" }
      }
    >
      <img
        src={Poster}
        className="card-img-top"
        alt="..."
        style={{ height: "200px" }}
      />
      <div className="d-flex flex-grow-1 flex-column justify-content-between p-1">
        <div className="card-body">
          <h6 className="card-title">{Title}</h6>
          <p className="card-text">IMDB Rating: {imdbRating}</p>
          <small className="">{Plot?.slice(0, 80)}...</small>
        </div>
        {!mode && (
          <div className="d-flex gap-1">
            <button
              className="btn btn-warning w-50"
              onClick={() => movieType("drama")}
            >
              Drama
            </button>
            <button
              className="btn btn-info w-50"
              onClick={() => movieType("action")}
            >
              Action
            </button>
          </div>
        )}

        <button
          onClick={() => handleOnDelete(imdbID)}
          className="btn btn-danger mt-2 w-100"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
