import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
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