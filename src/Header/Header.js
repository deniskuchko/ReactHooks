import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <NavLink to="/useState">UseState</NavLink>
      <NavLink to="/useEffect">UseEffect</NavLink>
      <NavLink to="/useRef">UseRef</NavLink>
      <NavLink to="/useMemo">UseMemo</NavLink>
      <NavLink to="/useCallback">UseCallback</NavLink>
    </div>
  );
}

export default Header;
