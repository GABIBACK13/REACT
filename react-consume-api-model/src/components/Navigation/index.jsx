import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import colors from "../../config/colors.js";
import { Nav, NavList, NavItem} from './styled-navigation.js';
export default function Navigation() {
  return (
    <Nav>
      <NavList $colors={colors}>
        <NavItem $colors={colors}>
          <Link to="/login">
            <FaUser size={24} color={colors.base}/>
          </Link>
        </NavItem >

        <NavItem $colors={colors}>
          <Link to="/">
            <FaHome size={24} color={colors.base}/>
          </Link>
        </NavItem >

      </NavList>
    </Nav>
  );
}
