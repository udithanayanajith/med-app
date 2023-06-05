import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Add from "./pages/Add";
import { getAccessBool } from "./utils/tokens";

const IsAuth = getAccessBool();

console.log("BOOLL", IsAuth);

function Routes() {
  return useRoutes([
    { path: "/login", element: <Login /> },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/add",
      element: IsAuth ? <Add /> : <Navigate to="/login" replace />,
    },
  ]);
}

export default Routes;
