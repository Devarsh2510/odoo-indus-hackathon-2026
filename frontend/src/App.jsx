import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Receipts from "./pages/Receipts";
import Deliveries from "./pages/Deliveries";
import Transfers from "./pages/Transfers";
import Adjustments from "./pages/Adjustments";
import MoveHistory from "./pages/MoveHistory";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

function App() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <Routes>

      {/* LOGIN */}

      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/login" />}
      />

      {/* REGISTER */}

      <Route
        path="/register"
        element={!user ? <Register /> : <Navigate to="/" />}
      />

      {/* FORGOT PASSWORD */}

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      {/* DASHBOARD */}

      <Route
        path="/"
        element={
          user ? (
            <div className="flex h-screen">

              <Sidebar />

              <div className="flex-1 flex flex-col bg-gray-100">

                <Navbar />

                <div className="p-6 overflow-auto">
                  <Dashboard />
                </div>

              </div>

            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* OTHER PAGES */}

      <Route path="/products" element={user ? <Products /> : <Navigate to="/login" />} />
      <Route path="/receipts" element={user ? <Receipts /> : <Navigate to="/login" />} />
      <Route path="/deliveries" element={user ? <Deliveries /> : <Navigate to="/login" />} />
      <Route path="/transfers" element={user ? <Transfers /> : <Navigate to="/login" />} />
      <Route path="/adjustments" element={user ? <Adjustments /> : <Navigate to="/login" />} />
      <Route path="/move-history" element={user ? <MoveHistory /> : <Navigate to="/login" />} />

    </Routes>

  );
}

export default App;