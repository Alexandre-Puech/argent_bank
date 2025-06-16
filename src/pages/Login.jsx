import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/slices/user";
import "../styles/css/login.css";
import userIcon from "../assets/userLogo.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    const remember = localStorage.getItem("rememberMe") === "true";
    if (remember && savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
    if (user && user.connected && user.token) {
      navigate("/profile");
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.body.token) {
        const token = data.body.token;

        const profileResponse = await fetch(
          "http://localhost:3001/api/v1/user/profile",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        const profileData = await profileResponse.json();
        const { firstName, lastName } = profileData.body;

        if (rememberMe) {
          localStorage.setItem("rememberedEmail", email);
          localStorage.setItem("rememberMe", "true");
          localStorage.setItem("token", token);
        } else {
          localStorage.removeItem("rememberedEmail");
          localStorage.removeItem("rememberMe");
          sessionStorage.setItem("token", token);
        }

        dispatch(login({ prenom: firstName, nom: lastName, token }));
        navigate("/profile");
      } else {
        alert("Identifiants invalides");
      }
    } catch (error) {
      console.error("Login failed", error);
      alert("Erreur serveur");
    }
  };

  return (
    <section className="sign-in-content">
      <form onSubmit={handleLogin}>
        <img src={userIcon} alt="User Icon" className="sign-in-icon" />
        <h2>Sign In</h2>
        <div className="input-wrapper">
          <label>
            Username
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="input-wrapper">
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="input-remember">
          <input
            className="remember-me"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label>Remember me</label>
        </div>
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
    </section>
  );
}
