import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import KPICards from "./components/KPICards";
import InventoryChart from "./components/InventoryChart";

import { Routes, Route } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <KPICards />
      <div className="mt-8">
        <InventoryChart />
      </div>
    </>
  );
}

function App() {
  return (
    <div className="flex h-screen">
      
      <Sidebar />

      <div className="flex-1 flex flex-col bg-gray-100">
        <Navbar />

        <div className="p-6 overflow-auto">

          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>

        </div>
      </div>

    </div>
  );
}

export default App;