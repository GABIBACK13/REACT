import React from "react";
import PropTypes from "prop-types";

import { FaPlus, FaCheck } from "react-icons/fa";
import "./form.css";

export default function Form({ handleSubmit, handleChange, newTask }) {
  return (
    <div className="main__form">
      <h1>
        Lista de tarefas <FaCheck />
      </h1>
      <form onSubmit={handleSubmit} className="form__add-list">
        <input type="text" onChange={handleChange} value={newTask} />
        <button type="submit">
          <FaPlus />
        </button>
      </form>
    </div>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  newTask: PropTypes.string,
}