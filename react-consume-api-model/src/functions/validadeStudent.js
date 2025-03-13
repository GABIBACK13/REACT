import { isEmail, isInt, isFloat, isNumeric } from "validator";
import { toast } from "react-toastify";
import { hashClasses } from "../config/schoolClasses";
import React from "react";

export default function validateStudent({
  nome,
  turma,
  email,
  idade,
  media,
  id = null,
}) {
  let error = false;
  if (id) {
    if (nome) error = validateNome(nome, error);
    if (turma) error = validateTurma(turma, error);
    if (email) error = validateEmail(email, error);
    if (idade) error = validateIdade(idade, error);
    if (media) error = validateMedia(media, error);
    return error;
  }
  error = validateNome(nome, error);
  error = validateTurma(turma, error);
  error = validateEmail(email, error);
  error = validateIdade(idade, error);
  error = validateMedia(media, error);
  return error;
}

function validateNome(nome, errors) {
  if (!nome || nome.length < 3 || nome.length > 255) {
    toast.error("Name must be between 3 and 255 characters");
    errors = true;
  }
  if (typeof nome !== "string" || isNumeric(nome)) {
    toast.error("Invalid name");
    errors = true;
  }
  return errors;
}

function validateTurma(turma, errors) {
  if (hashClasses.has(turma)) return errors;
  toast.error("Invalid class");
  errors = true;
  console.error(
    `Value must be contained in schoolClasses --> ${turma} is not defined in hash: ${hashClasses.values()}`
  );
  return errors;
}

function validateEmail(email, errors) {
  if (!email ||!isEmail(email)) {
    toast.error("Invalid email");
    errors = true;
  }
  return errors;
}

function validateIdade(idade, errors) {
  if (!idade || !isInt(idade) || idade < 12 || idade > 120) {
    toast.error("Age must be an integer between 12 and 120");
    errors = true;
  }
  if (idade > 120) toast.error("STUDENT ARE IMORTAL?!");

  return errors;
}

function validateMedia(media, errors) {
  if (!media || !isFloat(media) || media < 0 || media > 10) {
    toast.error("Average must be a number between 0 and 10");
    errors = true;
  }
  return errors;
}
