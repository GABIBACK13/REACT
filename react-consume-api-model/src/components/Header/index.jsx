import React from "react";
import Navigation from "../Navigation";

import colors from "../../config/colors.js";
import { HeaderContent, Title } from "./styled-header.js";

export default function Header() {
  return (
    <HeaderContent $colors={colors}>
      <Title $colors={colors}>Gabi School</Title>
      <Navigation />
    </HeaderContent>
  );
}
