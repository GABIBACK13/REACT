import React from "react";
import { toast } from "react-toastify";

export default function Table({ aluno }) {
  if (!aluno) return null;
  if (!Array.isArray(aluno)) aluno = [aluno];

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Id</th>
        </tr>
      </thead>
      <tbody>
        {aluno.map((aluno) => (
          <tr key={aluno.id}>
            <td>{aluno.nome}</td>
            <td>{aluno.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
