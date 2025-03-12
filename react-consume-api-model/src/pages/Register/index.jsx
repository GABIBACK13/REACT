import React, { useEffect, useState } from "react";
import { setUser } from "../../store/Users";
import validateUser from "../../functions/validateUser.js";

import { Form } from "../../styles/styled.js";
import Loading from "../../components/Loading";
import { useRecoilState } from "recoil";
import { authState } from "../../store/Auth/atoms";
import { get } from "lodash";
import { useNavigate } from "react-router-dom";
import axios from "../../services/axios/index.js";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useRecoilState(authState);
  const navigate = useNavigate();
  const id = get(auth, "user.id", false);
  const emailStored = get(auth, "user.email", "");
  const nameStored = get(auth, "user.nome", "");

  useEffect(() => {
    if (id) {
      setEmail(emailStored);
      setNome(nameStored);
    }
  }, [id, emailStored, nameStored, setEmail, setNome]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = validateUser(nome, email, password, id);
    if (errors) return;

    setLoading(true);

    let payload = {};
    if (nome) payload["nome"] = nome;
    if (email) payload["email"] = email;
    if (password) payload["password"] = password;

    if (id) {
      await setUser("put", payload, setLoading, navigate);
      setAuth({
        isAuthenticated: false,
        token: null,
        user: {},
      });
      delete axios.defaults.headers.Authorization;
      return;
    }
    await setUser("post", { nome, email, password }, setLoading, navigate);
    setLoading(false);
  };

  return (
    <div className="container">
      <Loading isLoading={loading} />

      <h1>{id ? "Edit your data" : "Register"}</h1>
      <p>{id ? `Logged as ${emailStored}` : "Register an Employ/Teacher"}.</p>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="nome">
          Name:
          <input
            type="text"
            autoComplete="name"
            name="nome"
            id="nome"
            placeholder="full name"
            minLength={3}
            maxLength={255}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            aria-label="Full Name"
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
            aria-label="Email"
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
            aria-label="Password"
          />
        </label>

        <button type="submit">Register</button>
      </Form>
    </div>
  );
}
