import React from "react";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  return (
    <>
      <nav class="nav nav-pills nav-justified">
        <NavLink class="nav-item nav-link sub-nav " to="/">
          Business insights
        </NavLink>
        <NavLink class="nav-item nav-link sub-nav  " to="/">
          User
        </NavLink>
        <NavLink class="nav-item nav-link sub-nav " to="/">
          Accounts
        </NavLink>
        <NavLink class="nav-item nav-link sub-nav sub-nav-active " to="/">
          Orders
        </NavLink>
        <NavLink class="nav-item nav-link sub-nav " to="/">
          Menu editor
        </NavLink>
        <NavLink class="nav-item nav-link sub-nav " to="/">
          Reports
        </NavLink>
        <NavLink class="nav-item nav-link sub-nav " to="/">
          Setting
        </NavLink>
      </nav>
      <hr className='no-margin'/>
    </>
  );
};

export default BottomNav;
