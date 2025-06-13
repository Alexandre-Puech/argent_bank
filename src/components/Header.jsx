import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/argentBankLogo.png";
import userIcon from "../assets/userLogo.svg";
import signOutIcon from "../assets/sign-out.svg";
import "../styles/css/Header.css";
import { logout } from "../store/slices/user";

export default function Header() {
  const user = useSelector((state) => state.user) || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());

    navigate("/", { replace: true });
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          src={logo}
          alt="Argent Bank Logo"
          className="main-nav-logo-image"
        />
      </Link>

      {user && user.connected ? (
        <div className="main-nav-connected">
          <Link to="/profile" className="main-nav-item">
            <img src={userIcon} alt="User Icon" className="main-nav-icon" />
            <span>{user.prenom}</span>
          </Link>
          <button
            onClick={handleLogout}
            className="main-nav-item logout-button"
          >
            <img
              src={signOutIcon}
              alt="Sign Out Icon"
              className="main-nav-icon"
            />
            Sign Out
          </button>
        </div>
      ) : (
        <Link to="/login" className="main-nav-item">
          <img src={userIcon} alt="User Icon" className="main-nav-icon" />
          Sign In
        </Link>
      )}
    </nav>
  );
}
