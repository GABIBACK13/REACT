import { atom } from 'recoil';

export const BtnClicked = atom({
  key: 'BtnClicked',  // Identificador único
  default: false,         // Valor inicial
});
