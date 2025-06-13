import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1>Bienvenue {user.prenom}</h1>
      <p>Voici votre profil</p>
    </div>
  );
}
