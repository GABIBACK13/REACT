import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import showErrors from "../../functions/showErrors.js";
import axios from "../../services/axios";

import { Title } from "./styled-login.jsx";
import colors from "../../config/colors.js";
import { Form } from "../../styles/styled.js";
import isEmail from "validator/lib/isEmail.js";
import { toast } from "react-toastify";
import { useRecoilCallback, useRecoilState } from "recoil";
import { authState } from "../../store/Auth/atoms";
import Loading from "../../components/Loading";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const { prevPath, errors = [] } = location.state || {};
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useRecoilState(authState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!auth.isAuthenticated && errors.length) {
      setTimeout(() => showErrors(errors), 350);
    }
  }, [errors, auth.isAuthenticated]);

  const setLogin = useRecoilCallback(
    ({ set }) =>
      async () => {
        try {
          const response = await axios.post("/tokens/", { email, password });
          set(authState, {
            isAuthenticated: true,
            token: response.data.token,
            user: response.data.user,
          });
          toast.success("Login successful");
          axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
        } catch (error) {
          toast.error("User or password invalid");
          set(authState, {
            isAuthenticated: false,
            token: null,
            user: {},
          });
        }
      },
    [email, password]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let errors = false;
    if (!isEmail(email)) {
      toast.error("Email must be a valid email");
      errors = true;
    }
    if (!password || password.length < 7 || password.length > 50) {
      toast.error("Invalid password");
      errors = true;
    }

    if (errors) {
      setLoading(false);
      return;
    }

    await setLogin(); 
    setLoading(false);
    navigate(prevPath || "/", { replace: true });
  };

  if (auth.isAuthenticated)
    return (
      <div className="container">
        <Title $colors={colors}>
          You are logged in as <small>{auth.user.email}</small>
        </Title>
        <button
          className="full-size"
          onClick={() => {
            setAuth({
              isAuthenticated: false,
              token: null,
              user: {},
            });
            delete axios.defaults.headers.Authorization;
          }}
        >
          Logout
        </button>
      </div>
    );

  return (
    <div className="container">
      <Loading isLoading={loading} />

      <Title $colors={colors}>Login Page</Title>
      <Form onSubmit={handleSubmit}>
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

        <button type="submit">Login</button>
      </Form>
    </div>
  );
}
