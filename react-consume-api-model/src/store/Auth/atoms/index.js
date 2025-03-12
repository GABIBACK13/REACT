import { atom } from "recoil";
import * as keys from "../../keys";
import { get } from "lodash";
import axios from "../../../services/axios";

const initialValue =  {
  isAuthenticated: false,
  token: null,
  user: {},
};

const loadState = (key, defaultValue) => {
  const saved = localStorage.getItem(key);
  const token = get(JSON.parse(saved), 'token', false);
  if (token) axios.defaults.headers.Authorization = `Bearer ${token}`;
  return saved ? JSON.parse(saved) : defaultValue;
};

const setState = (newValue) => {
  localStorage.setItem(keys.AUTH, JSON.stringify(newValue));
};

export const authState = atom({
  key: keys.AUTH,
  default: loadState(keys.AUTH, initialValue),
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      onSet((newValue) => setState(newValue));
    },
  ],
});
