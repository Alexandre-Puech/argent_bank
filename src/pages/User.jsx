import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { updateUser } from "../store/slices/user";
import "../styles/css/User.css";

export default function Profile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [prenom, setPrenom] = useState(user.prenom);
  const [nom, setNom] = useState(user.nom);
  const [loading, setLoading] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setPrenom(user.prenom);
    setNom(user.nom);
    setIsEditing(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = user.token;
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstName: prenom, lastName: nom }),
        }
      );

      if (response.ok) {
        dispatch(updateUser({ prenom, nom }));
        setIsEditing(false);
      } else {
        alert("Erreur lors de la mise à jour");
      }
    } catch (err) {
      console.error("Erreur réseau :", err);
      alert("Impossible de mettre à jour le profil");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="userHeader">
        {isEditing ? (
          <form onSubmit={handleSubmit} className="edit-name-form">
            <h1>Modifier votre nom</h1>
            <div className="edit-fields">
              <input
                type="text"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                required
              />
              <input
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
              />
            </div>
            <div className="edit-buttons">
              <button type="submit" className="edit-button" disabled={loading}>
                Save
              </button>
              <button
                type="button"
                className="edit-button cancel"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            <h1>
              Welcome back
              <br />
              {user.prenom} {user.nom}!
            </h1>
            <button className="edit-button" onClick={handleEditClick}>
              Edit Name
            </button>
          </>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </>
  );
}
