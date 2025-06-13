import { useLocation } from "react-router-dom";

export default function Layout({ header, footer, children }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      {header}
      <main className={isHomePage ? "main" : "main bg-dark"}>{children}</main>
      {footer}
    </>
  );
}
