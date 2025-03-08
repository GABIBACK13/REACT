import React from "react";

import { Title, Paragraph, Form } from "./styled-login.jsx";
import colors from "../../config/colors.js";

import { BtnClicked } from "../../store";
import { useRecoilState } from "recoil";

export default function Login() {
  const [state, setState] = useRecoilState(BtnClicked);
  return (
    <div>
      <Title colors={colors}>login {`${state}`}</Title>
      <button onClick={() => setState(!state)}>Click here</button>
    </div>
  );
}
