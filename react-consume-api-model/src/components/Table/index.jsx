import React, { useState } from "react";
import { get } from "lodash";
import PropTypes from "prop-types";
import { FaEdit, FaUserCircle, FaWindowClose } from "react-icons/fa";
import axios from "../../services/axios";
import Loading from "../Loading";
import { toast } from "react-toastify";

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
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState(
    Array.isArray(aluno) ? aluno : [aluno]
  );

  if (!students.length) return <p>No students found.</p>;

  const handleDelete = async (id, nome) => {
    if (!window.confirm(`Are you sure you want to delete ${id}: ${nome}?`))
      return;

    try {
      setLoading(true);
      await axios.delete(`/alunos/${id}`);
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student.id !== id)
      );
      toast.info(`${nome} deleted successfully`);
    } catch (error) {
      console.error(error);
      const errors = get(error, "response.data.errors", []);
      if (!errors.length) {
        toast.error("An unexpected error occurred while deleting the student.");
      } else {
        errors.forEach((err) => toast.error(err));
      }
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
          {students.map((student) => (
            <Tr key={student.id}>
              <Td className="FaBorder">
                <Link to={`/student/view/${student.id}`}>
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
                    onClick={() => handleDelete(student.id, student.nome)}
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
