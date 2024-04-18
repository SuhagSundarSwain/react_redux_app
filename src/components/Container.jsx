export default function Container({ children }) {
  return (
    <div className="card" style={{ width: "40%", margin: "0 30%" }}>
      <div className="card-body">{children}</div>
    </div>
  );
}
