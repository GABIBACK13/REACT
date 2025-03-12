import { atom } from "recoil";
import * as keys from "../keys";
export const loadingState = atom({
  key: keys.LOADING,
  default: false,
});