import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Protected({ children }) {
  const { connected, token } = useSelector((state) => state.user);

  if (!connected || !token) {
    return <Navigate to="/" replace />;
  }

  return children;
}
