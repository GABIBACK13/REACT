import React from "react";
import { get } from "lodash";
import { FaEdit, FaUserCircle, FaWindowClose } from "react-icons/fa";
import {
  Img,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Caption,
  Block,
} from "./styled-table";
import { Link } from "react-router-dom";
import colors from "../../config/colors";

export default function StudentsTable({ aluno }) {
  if (!aluno) return null;
  if (!Array.isArray(aluno)) aluno = [aluno];
  return (
    <Table>
      <Caption>STUDENTS</Caption>
      <Thead>
        <Tr>
          <Th>Profile</Th>
          <Th>name</Th>
          <Th>age</Th>
          <Th>class</Th>
          <Th>edit</Th>
          <Th>delete</Th>
        </Tr>
      </Thead>
      <Tbody>
        {aluno.map((aluno) => (
          <Tr key={aluno.id}>
            <Td className="FaBorder">
              <Link to={`/student/${aluno.id}`}>
                {get(aluno, "Files[0].url", false) ? (
                  <Img
                    crossOrigin="anonymous"
                    src={aluno.Files[0].url}
                    alt="profile photo"
                  />
                ) : (
                  <FaUserCircle size={36} color={colors.background} />
                )}
              </Link>
            </Td>
            <Td>{aluno.nome}</Td>
            <Td>{aluno.idade}</Td>
            <Td>{aluno.turma}</Td>
            <Td className="td-buttons">
              <Block>
                <Link to={`/student/${aluno.id}`}>
                  <FaEdit color={colors.background} />
                </Link>
              </Block>
            </Td>
            <Td className="td-buttons">
              <Block>
                <Link to={`/student/${aluno.id}`}>
                  <FaWindowClose color={colors.primary} />
                </Link>
              </Block>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
