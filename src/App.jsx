import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/User/Login";
import ForgotPassword from "./Components/User/ForgotPassword";
import Register from "./Components/User/Register";
import { ToastContainer } from "react-toastify";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
      <div className="container-fluid p-0 m-0">

    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <ToastContainer />
    </Router>
      </div>
  );
}

export default App;
