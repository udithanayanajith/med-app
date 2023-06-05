import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const location = useLocation();

  return (
    <div className="flex justify-end ">
      <h5
        className="text-base text-blue-800 text-center p-2 px-5 cursor-pointer hover:opacity-50"
        onClick={() =>
          navigate(`${location.pathname == "/login" ? "/" : "/login"}
        `)
        }
      >
        {location.pathname == "/login" ? "Home" : "Login"}
      </h5>
    </div>
  );
}

export default NavBar;
