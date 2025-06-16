import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Protected({ children }) {
  const { connected, token } = useSelector((state) => state.user);

  if (!token) {
    return <Navigate to="/" />;
  }

  if (!connected) {
    return (
      <div className="protected-loading">
        <p>Chargement de votre session...</p>
      </div>
    );
  }

  return children;
}
