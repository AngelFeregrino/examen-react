import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const token = localStorage.getItem("token");

  return (
    <nav style={styles.nav}>
      <h2 style={{ color: "white" }}>Sistema Gestion de Empleados</h2>

      {token && (
        <div>
          <Link style={styles.link} to="/dashboard">Dashboard</Link>
          <button style={styles.button} onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    background: "#1e293b",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  link: {
    color: "white",
    marginRight: "15px",
    textDecoration: "none"
  },
  button: {
    padding: "6px 12px",
    cursor: "pointer"
  }
};

export default Navbar;
