import React, { useEffect, useState } from "react";
import { Form } from "../../styles/styled";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { classes } from "../../config/schoolClasses";
import validateStudent from "../../functions/validadeStudent";
import axios from "../../services/axios";
import { get } from "lodash";

export default function Student() {
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [turma, setTurma] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [media, setMedia] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function setData(id) {
      try {
        setLoading(true);
        const response = await axios.get(`alunos/${id}`);
        const { data } = response;
        setNome(data.nome);
        setTurma(data.turma);
        setIdade(data.idade);
        setEmail(data.email);
        setMedia(data.media);
        setLoading(false);
      } catch (error) {
        console.error(error);
        toast.error("error at set student");
        setLoading(false);
      }
    }
    if (id) {
      setData(id);
    }
    return;
  }, [id]);

  const clearData = () => {
    setNome("");
    setTurma("");
    setEmail("");
    setIdade("");
    setMedia("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateStudent({ nome, turma, email, idade, media, id });
    if (formErrors) return;

    setLoading(true);
    try {
      if (id) {
        await axios.put(`alunos/${id}`, { nome, turma, email, idade, media });
        toast.success("Student updated successfully");
        setLoading(false);
        return;
      }
      await axios.post(`alunos`, { nome, turma, email, idade, media });
      toast.success("Student saved successfully");
      clearData();

      setLoading(false);
      return;
    } catch (error) {
      if (get(error, "response.data.errors", false)) {
        if (!Array.isArray(error.response.data.errors)) {
          toast.error(
            `An error ocurred while ${id ? "updating" : "saving"} student`
          );
          setLoading(false);
          return;
        }
        setLoading(false);
        error.response.data.errors.forEach((err) => toast.error(err));
        return;
      }
    }

    setLoading(false);
    return;
  };

  return (
    <div className="container" style={{ marginTop: "55px" }}>
      <Loading isLoading={loading} />
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
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
          Email:
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="email"
          />
        </label>

        <label htmlFor="turma">
          Class: {turma && id ? <small>old class: {turma}</small> : ""}
          <select
            name="turma"
            id="turma"
            onChange={(e) => setTurma(e.target.value)}
            aria-label="class"
          >
            <optgroup label="1º ano">
              <option value={`${classes[0]}`} aria-label="class 1A">
                1A
              </option>
              <option value={`${classes[1]}`} aria-label="class 1B">
                1B
              </option>
              <option value={`${classes[2]}`} aria-label="class 1C">
                1C
              </option>
            </optgroup>
            <optgroup label="2º ano">
              <option value={`${classes[3]}`} aria-label="class 2A">
                2A
              </option>
              <option value={`${classes[4]}`} aria-label="class 2B">
                2B
              </option>
              <option value={`${classes[5]}`} aria-label="class 2C">
                2C
              </option>
            </optgroup>
            <optgroup label="3º ano">
              <option value={`${classes[6]}`} aria-label="class 3A">
                3A
              </option>
              <option value={`${classes[7]}`} aria-label="class 3B">
                3B
              </option>
              <option value={`${classes[8]}`} aria-label="class 3C">
                3C
              </option>
            </optgroup>
          </select>
        </label>

        <section className="row-display">
          <label htmlFor="idade" className="small">
            Age:
            <input
              type="number"
              name="idade"
              id="idade"
              placeholder="age"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              aria-label="Age"
            />
          </label>

          <label htmlFor="media" className="small">
            Average:
            <input
              type="float"
              name="media"
              id="media"
              min={0}
              max={10}
              placeholder="average"
              value={media}
              onChange={(e) => setMedia(e.target.value)}
              aria-label="Average"
            />
          </label>
        </section>

        <button type="submit">{id ? "update student" : "add student"}</button>
      </Form>
    </div>
  );
}
