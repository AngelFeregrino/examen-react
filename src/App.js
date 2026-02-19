import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./componentes/barra";
import Login from "./vistas/login";
import Dashboard from "./vistas/Dashboard";
import ProtectedRoute from "./componentes/ProtectedRoute";
import Signup from "./vistas/signup";

function Layout() {
  const token = localStorage.getItem("token");

  return (
    <>
      {token && <Navbar />}
      <Routes>
  <Route path="/" element={<Navigate to="/login" />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />

  <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <>
          <Navbar />
          <Dashboard />
        </>
      </ProtectedRoute>
    }
  />
</Routes>
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;