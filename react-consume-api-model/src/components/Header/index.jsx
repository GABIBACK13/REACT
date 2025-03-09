import React from "react";
import Navigation from "../Navigation";

import { HeaderContent, Title } from "./styled-header.js";
import colors from "../../config/colors.js";

import { useRecoilValue } from "recoil";
import { BtnClicked } from "../../store";

export default function Header() {
  const state = useRecoilValue(BtnClicked);

  return (
    <HeaderContent $colors={colors}>
      <Title $colors={colors}>Gabi {`${state}`}</Title>
      <Navigation />
    </HeaderContent>
  );
}
