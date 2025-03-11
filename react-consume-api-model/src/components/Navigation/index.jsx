import React from "react";
import { FaHome, FaSign, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import colors from "../../config/colors.js";
import { Nav, NavList, NavItem } from "./styled-navigation.js";
export default function Navigation() {
  return (
    <Nav>
      <NavList $colors={colors}>
        <NavItem $colors={colors}>
          <Link to="/" aria-label="Home" title="Home"> 
            <FaHome size={24} color={colors.base} />
          </Link>
        </NavItem>

        <NavItem $colors={colors}>
          <Link to="/register" aria-label="Register" title="Register">
            <FaUser size={24} color={colors.base} />
          </Link>
        </NavItem>

        <NavItem $colors={colors}>
          <Link to="/login" aria-label="Login" title="Login">
            <FaSign size={24} color={colors.base} />
          </Link>
        </NavItem>
      </NavList>
    </Nav>
  );
}
