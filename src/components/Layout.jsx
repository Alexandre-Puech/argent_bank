export default function Layout({ header, footer, children }) {
  return (
    <div className="appLayout">
      {header}
      <main>{children}</main>
      {footer}
    </div>
  );
}
