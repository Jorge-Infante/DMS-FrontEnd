import React, { useEffect } from "react";
import { useAuth } from "../../hooks";
import { useMovie } from "../../hooks/useMovie";
import { map } from "lodash";
import {Movies} from "../../components/movie"

export const HomeAdmin = () => {
  const { loading, movie, getAllMovies } = useMovie();
  console.log("*** Loading -->", loading);
  console.log("** Movies -->", movie);

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div>
      <Movies movie={movie}/>
    </div>
  );
};
