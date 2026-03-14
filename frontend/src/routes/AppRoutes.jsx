import { Routes, Route } from "react-router-dom";
import Products from "../pages/Products";

function AppRoutes() {
  return (
    <Routes>

      <Route path="/products" element={<Products />} />

    </Routes>
  );
}

export default AppRoutes;