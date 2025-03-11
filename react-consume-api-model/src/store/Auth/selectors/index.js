import { selector } from "recoil";
import { authState } from "../atoms";
import * as keys from "../../keys";
import axios from "../../../services/axios";
import { toast } from "react-toastify";

export const authSelector = selector({
  key: keys.AUTH_SELECTOR,
  get: async ({ get }) => get(authState),
});
