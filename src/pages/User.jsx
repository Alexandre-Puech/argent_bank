import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Profile() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.connected) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div>
      <h1>Bienvenue {user.prenom}</h1>
      <p>Voici votre profil</p>
    </div>
  );
}
