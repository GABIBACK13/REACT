import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "../../services/axios";
import { toast } from "react-toastify";
import { get } from "lodash";

export const setUser = async (method, payload = {}, Loader, navigate) => {
  try {
    let response;
    if (method === "post") {
      response = await axios.post("/users", payload);
    } else if (method === "put") {
      response = await axios.put("/users", payload);
    }

    toast.success(
      `${payload.nome} ${method === "put" ? "updated" : "added"} successfully!`
    );

    Loader(false);
    navigate("/login");
  } catch (error) {
    console.error(error);
    Loader(false);

    const errors = get(error, "response.data.errors", []);
    if (Array.isArray(errors)) {
      errors.forEach((err) => toast.error(err));
    } else {
      toast.error("An unexpected error occurred.");
    }
  }
};
