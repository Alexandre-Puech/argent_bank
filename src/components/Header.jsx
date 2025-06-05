import { Link } from "react-router";
import logo from "../assets/argentBankLogo.png";
import userIcon from "../assets/userLogo.svg";
import "../styles/css/Header.css";

export default function Header() {
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          src={logo}
          alt="Argent Bank Logo"
          className="main-nav-logo-image"
        />
      </Link>
      <Link to="/login" className="main-nav-item">
        <img src={userIcon} alt="User Icon" className="main-nav-icon" />
        Sign In
      </Link>
    </nav>
  );
}

// <nav class="main-nav">
//       <a class="main-nav-logo" href="./index.html">
//         <img
//           class="main-nav-logo-image"
//           src="./img/argentBankLogo.png"
//           alt="Argent Bank Logo"
//         />
//         <h1 class="sr-only">Argent Bank</h1>
//       </a>
//       <div>
//         <a class="main-nav-item" href="./sign-in.html">
//           <i class="fa fa-user-circle"></i>
//           Sign In
//         </a>
//       </div>
//     </nav>
