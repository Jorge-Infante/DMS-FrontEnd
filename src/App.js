import React from "react";
import "./App.scss";
import { Navigation } from "./routes/Navigation";
// import {ClientLayout} from "./layouts"
import { AuthProvider } from "./context/AuthContext";
export const App = () => {
  return (
    <div className="app">
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </div>
  );
};
