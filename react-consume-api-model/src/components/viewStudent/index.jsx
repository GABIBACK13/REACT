import React from "react";
import {
  Profile,
  ProfileImg,
  ProfileHeader,
  ProfileBody,
  Edit,
} from "./styled-student.js";
import { FaEdit, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import colors from "../../config/colors.js";

export default function ViewStudent({
  nome,
  idade,
  email,
  turma,
  media,
  id,
  fileUrl,
}) {
  return (
    <div className="container">
      <Profile>
        <ProfileImg>
          {fileUrl ? (
            <img crossOrigin="anonymous" src={fileUrl} alt="student" />
          ) : (
            <FaUserCircle size={130} />
          )}
          <Edit>
            <Link to={`/student/${id}/profile`}>
              <FaEdit color={colors.secondary} size={20} />
            </Link>
          </Edit>
        </ProfileImg>

        <ProfileHeader>
          <h1>{nome}</h1>
          <h2>
            <small>{email}</small>
          </h2>
        </ProfileHeader>
        <ProfileBody>
          <div>
            <strong>Age</strong>: {idade}
          </div>
          <div>
            <strong>Class</strong>: {turma}
          </div>
          <div>
            <strong>Average Mark</strong>: {media}
          </div>
        </ProfileBody>
      </Profile>
      <Link to={`/student/${id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}
