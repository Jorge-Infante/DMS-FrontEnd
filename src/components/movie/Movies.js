import React from "react";
import { map } from "lodash";
import { Movie } from "./Movie";
import "./movies.scss";

export const Movies = ({ movie }) => {
  return (
    <div className="card-movie">
      {map(movie, (movi, index) => (
        <Movie key={index} movi={movi} />
      ))}
    </div>
  );
};
