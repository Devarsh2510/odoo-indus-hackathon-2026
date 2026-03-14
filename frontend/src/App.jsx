import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import KPICards from "./components/KPICards";
import InventoryChart from "./components/InventoryChart";

function App() {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100">

        {/* Top Navbar */}
        <Navbar />

        {/* Dashboard Content */}
        <div className="p-6 overflow-auto">

          {/* Dashboard Title */}
          <h1 className="text-3xl font-bold mb-6">
            Dashboard
          </h1>

          {/* KPI Cards */}
          <KPICards />

          {/* Inventory Chart */}
          <div className="mt-8">
            <InventoryChart />
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;