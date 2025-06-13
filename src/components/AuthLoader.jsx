import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/user";

export default function AuthLoader({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await fetch(
            "http://localhost:3001/api/v1/user/profile",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          if (response.ok) {
            const { firstName, lastName } = data.body;
            dispatch(login({ prenom: firstName, nom: lastName, token }));
          }
        } catch (err) {
          console.error("Token invalide ou expiré", err);
          localStorage.removeItem("token");
          sessionStorage.removeItem("token");
        }
      }
    };
    initAuth();
  }, [dispatch]);
  return children;
}
