export default function MenuItem({ item }) {
  return (
    <div className="d-flex my-3">
      <div className="menu-icon">{item.icon}</div>
      <p className="menu-text mx-3">{item.name}</p>
    </div>
  );
}
