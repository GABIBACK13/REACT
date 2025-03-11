import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import showErrors from "../../functions/showErrors.js";
import axios from "../../services/axios";

import { Title } from "./styled-login.jsx";
import colors from "../../config/colors.js";
import { Form } from "../../styles/styled.js";
import isEmail from "validator/lib/isEmail.js";
import { toast } from "react-toastify";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { authState } from "../../store/Auth/atoms";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  let { prevPath, errors } = location.state || [];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useRecoilValue(authState);

  useEffect(() => {
    setTimeout(() => {
      showErrors(errors);
      errors = [];
    }, 350);
  }, [errors]);

  const setLogin = useRecoilCallback(
    ({ set }) =>
      async () => {
        try {
          console.log({ email, password });
          const response = await axios.post("/tokens/", { email, password });
          console.log(response.data);
          set(authState, {
            isAuthenticated: true,
            token: response.data.token,
            user: response.data.user,
          });
          toast.success("Login successful");
          axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
        } catch (error) {
          console.error(error);
          toast.error("user or password invalid");
          set(authState, {
            isAuthenticated: false,
            token: null,
            user: {},
          });
        }
      },
    [email, password]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = false;
    if (!isEmail(email)) {
      toast.error("email must be a valid email");
      errors = true;
    }
    if (!password || password.length < 7 || password.length > 50) {
      toast.error("Invalid password");
      errors = true;
    }

    if (errors) return;
    setLogin();
    if (!prevPath) navigate("/");
    navigate(prevPath, { replace: true });
  };

  return (
    <div className="container">
      <Title $colors={colors}>Login Page</Title>
      <Form onSubmit={(e) => handleSubmit(e)}>
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
            required
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
            required
          />
        </label>

        <button type="submit">Register</button>
      </Form>
    </div>
  );
}
