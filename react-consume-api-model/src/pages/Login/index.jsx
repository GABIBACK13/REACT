import React from "react";

import { Title } from "./styled-login.jsx";
import Table from "../../components/Table";

import colors from "../../config/colors.js";

import { BtnClicked, Alunos } from "../../store";
import { useRecoilState, useRecoilValueLoadable } from "recoil";

export default function Login() {
  const [state, setState] = useRecoilState(BtnClicked);
  const alunosLoadable = useRecoilValueLoadable(Alunos);

  let alunosContent;
  switch (alunosLoadable.state) {
    case "loading":
      alunosContent = <p>Carregando...</p>;
      break;
    case "hasValue":
      alunosContent = <Table aluno={alunosLoadable.contents} />;
      break;
    case "hasError":
      alunosContent = <p>Erro ao carregar alunos.</p>;
      break;
    default:
      alunosContent = null;
  }

  return (
    <div>
      <Title $colors={colors}>Login {`${state}`}</Title>
      {alunosContent}
      <button onClick={() => setState(!state)}>Click here</button>
    </div>
  );
}
