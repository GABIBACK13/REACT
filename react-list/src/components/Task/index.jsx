import React from "react";
import PropTypes from "prop-types";

import { FaWindowClose, FaEdit } from "react-icons/fa";
import './task.css';

export default function TaskLi({ txt, id, onDelete, onEdit }) {
  return (
    <li>
      {txt}  
      <div className="task-icons">
        <FaEdit onClick={() => onEdit(id)} />
        <FaWindowClose onClick={() => onDelete(id)} />
      </div>
    </li>
  );
}

TaskLi.propTypes = {
  txt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
}