import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Links.css";

function LinksComponent() {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div id="subNavDiv">
      {sessionUser && (
        <>
          <NavLink to="/kitchen" className="subNavLinks">
            {" "}
            Kitchen{" "}
          </NavLink>
          <NavLink to="/recipes" className="subNavLinks">
            {" "}
            Recipes{" "}
          </NavLink>
          <NavLink to="/ingredients" className="subNavLinks">
            {" "}
            Ingredients{" "}
          </NavLink>
        </>
      )}
    </div>
  );
}

export default LinksComponent;
