import { atom, selector } from "recoil";
import axios from "../services/axios";
import { toast } from "react-toastify";
import * as keys from "./keys";

export const BtnClicked = atom({
  key: keys.BTN_CLICKED,
  default: false,
});

export const Alunos = selector({
  key: keys.GET_ALUNOS,
  get: async () => {
    try {
      const alunos = await axios.get("/alunos/");
      if (!alunos.data) {
        toast.error("Nenhum aluno encontrado!");
        return [];
      }
      toast.success("Alunos carregados com sucesso!");
      return alunos.data;
    } catch (error) {
      console.error(error);

      toast.error("Ocorreu um erro ao carregar os alunos!");
      return [];
    }
  },
});
