import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // 🔥 Aquí luego irá tu fetch a PHP
    console.log({ username, email, password });

    alert("Usuario registrado (simulado)");
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSignup}>
        <h2>Registrar Usuario Administrador</h2>

        <input
          type="text"
          placeholder="Nombre de Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Crear Cuenta</button>

        <button
          type="button"
          onClick={() => navigate("/login")}
          style={{ marginTop: "10px" }}
        >
          Volver al Login
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f1f5f9"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    background: "white",
    padding: "30px",
    borderRadius: "8px",
    width: "350px"
  }
};

export default Signup;
