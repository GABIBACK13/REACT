import React, { useState } from "react";
import { get } from "lodash";
import PropTypes from "prop-types";
import { FaEdit, FaUserCircle, FaWindowClose } from "react-icons/fa";
import axios from "../../services/axios";
import Loading from "../Loading";

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
import { toast } from "react-toastify";

export default function StudentsTable({ $aluno }) {
  const [loading, setLoading] = useState(false);

  if (!$aluno) return null;
  let student = $aluno;
  if (!Array.isArray(student)) student = [student];

  const handleDelete = async (e, id, nome) => {
    if (!window.confirm(`Are you sure you want to delete ${id}: ${nome}?`))
      return;

    try {
      setLoading(true);
      await axios.delete(`/alunos/${id}`);
      document.body.querySelector(`#${id}`).remove();
      toast.info(`${nome} deleted successfully`);
      return;
    } catch (error) {
      console.error(error);
      const errors = get(error, "response.data.errors", []);
      if (!errors) {
        toast.error("An unexpected error occurred while deleting the student.");
        return;
      }
      errors.forEach((err) => toast.error(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Loading isLoading={loading} />
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
          {student.map((student) => (
            <Tr key={student.id} id={student.id}>
              <Td className="FaBorder">
                <Link to={`/student/${student.id}`}>
                  {get(student, "Files[0].url", false) ? (
                    <Img
                      crossOrigin="anonymous"
                      src={student.Files[0].url}
                      alt="profile photo"
                    />
                  ) : (
                    <FaUserCircle size={36} color={colors.background} />
                  )}
                </Link>
              </Td>
              <Td>{student.nome}</Td>
              <Td>{student.idade}</Td>
              <Td>{student.turma}</Td>
              <Td className="td-buttons">
                <Block>
                  <Link to={`/student/${student.id}`}>
                    <FaEdit color={colors.background} />
                  </Link>
                </Block>
              </Td>
              <Td className="td-buttons">
                <Block>
                  <div
                    className="delete-ask"
                    onClick={(e) => handleDelete(e, student.id, student.nome)}
                  >
                    <FaWindowClose color={colors.primary} />
                  </div>
                </Block>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}

StudentsTable.propTypes = {
  $aluno: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
