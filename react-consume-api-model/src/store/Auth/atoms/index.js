import { atom } from 'recoil';
import * as keys from "../../keys";

const loadState = (key, defaultValue) => {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : defaultValue;
};

const setState = (newValue) => {
  localStorage.setItem(keys.AUTH, JSON.stringify(newValue));
}

export const authState = atom({
  key: keys.AUTH,
  default: loadState(keys.AUTH, {
    isAuthenticated: false,
    token: null,
    user: {},
    loading: false,
  }),
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      onSet((newValue) => {
        localStorage.setItem(keys.AUTH, JSON.stringify(newValue));
      });
    },
  ],
});