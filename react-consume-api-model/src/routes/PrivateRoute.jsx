import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children, isClosed }) {
  const isLoggedIn = !false;
  const location = useLocation();

  return isClosed && !isLoggedIn ? (
    <Navigate to="/login" state={{ prevPath: location.pathname }} replace />
  ) : (
    children
  );
}
