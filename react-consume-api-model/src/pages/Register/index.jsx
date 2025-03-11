import React, { useState } from "react";
import isEmail from "validator/lib/isEmail.js";
import { isAlphanumeric } from "validator";
import { toast } from "react-toastify";
import axios from "../../services/axios";

import { Form } from "../../styles/styled.js";
import { get } from "lodash";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = false;

    if (!nome || nome.length < 3 || nome.length > 255) {
      toast.error("name's length must be between 3 and 255 characters");
      errors = true;
    }

    if (!isEmail(email)) {
      toast.error("email must be a valid email");
      errors = true;
    }

    if (!password || password.length < 7 || password.length > 50) {
      toast.error("password's length must be between 7 and 50 characters");
      errors = true;
    }
    if (!isAlphanumeric(password)) {
      toast.error("Password must contain only numbers and letters");
      errors = true;
    }

    if (errors) return;
    try {
      const Response = await axios.post("/users", {
        nome,
        email,
        password,
      });
      toast.success(`${nome} added successfully!`);
      navigate("/login");
    } catch (error) {
      const errors = get(error, "response.data.errors", []);
      errors.map((err) => toast.error(err));
    }
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <p>Register an Employ/Teacher.</p>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="nome">
          Name:
          <input
            type="nome"
            autoComplete="name"
            name="nome"
            id="nome"
            placeholder="full name"
            minLength={3}
            maxLength={255}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>

        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            autoComplete="email"
            name="email"
            id="email"
            placeholder="exemple@ex.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            type="password"
            autoComplete="false"
            name="password"
            id="password"
            placeholder="your password"
            minLength={7}
            maxLength={50}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit">Register</button>
      </Form>
    </div>
  );
}
