import { useLocation } from "react-router-dom";

export default function Layout({ header, footer, children }) {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  return (
    <>
      {header}
      <main className={isLoginPage ? "main bg-dark" : "main"}>{children}</main>
      {footer}
    </>
  );
}
