import { Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../store/Auth/atoms";

export default function PrivateRoute({ children, isClosed }) {
  const auth = useRecoilValue(authState);
  const isLoggedIn = auth.isAuthenticated;
  const location = useLocation();

  if (isClosed && !isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{
          prevPath: location.pathname,
          errors: ["you need to be logged in"],
        }}
        replace
      />
    );
  }

  return children;
}
