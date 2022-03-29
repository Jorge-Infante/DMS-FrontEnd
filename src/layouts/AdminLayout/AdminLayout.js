import React from "react";
import "./AdminLayout.scss";
import { LoginAdmin } from "../../pages/Admin";
import { useAuth } from "../../hooks";
import { NavLink } from "react-router-dom";

export const AdminLayout = (props) => {
  const { children } = props;
  const { auth,logout } = useAuth();

  if (!auth) return <LoginAdmin />;

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-2">
          <a className="navbar-brand">
            Drup Movie Store
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link">
                  <NavLink to={"/admin"}>Lista pelis</NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <NavLink to={"/createMovie"}>Crear peli</NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  {/* <NavLink to={'/login'}>Login</NavLink> */}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">Disabled</a>
              </li>
            </ul>
          </div>
          <button className="btn btn-primary my-2 my-sm-0" type="submit" onClick={logout}>
            Cerrar sesión
          </button>
        </nav>
      {children}
    </div>
  );
};
