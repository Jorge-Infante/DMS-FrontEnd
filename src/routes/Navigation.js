import { map } from "lodash";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "./routes"

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        {map(routes, (route, index)=>(
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component/>
              </route.layout>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
