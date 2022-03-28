import React from 'react';
import {useAuth} from "../../hooks"

export const HomeAdmin = () => {
  const {logout}=useAuth();
  return (
    <div>
        <h1>Home admin</h1>
        <button onClick={logout}>cerrar session</button>
    </div>
  )
}
