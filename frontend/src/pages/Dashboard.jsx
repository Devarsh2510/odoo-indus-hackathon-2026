import KPICards from "../components/KPICards";
import InventoryChart from "../components/InventoryChart";
import LowStockAlert from "../components/LowStockAlert";
import RecentActivity from "../components/RecentActivity";

function Dashboard() {

  // Temporary product data (until backend is connected)
  const products = [
    { id: 1, name: "Steel Rod", stock: 120 },
    { id: 2, name: "Plastic Table", stock: 40 },
    { id: 3, name: "Wood Chair", stock: 6 },
    { id: 4, name: "Iron Sheet", stock: 4 }
  ];

  // Temporary move history data
  const history = [
    { id: 1, product: "Steel Rod", action: "Receipt", quantity: 50, date: "2026-03-14" },
    { id: 2, product: "Steel Rod", action: "Transfer", quantity: -20, date: "2026-03-15" },
    { id: 3, product: "Plastic Table", action: "Delivery", quantity: -5, date: "2026-03-16" }
  ];

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      {/* KPI Cards */}
      <KPICards />

      {/* Inventory Chart */}
      <div className="mt-8">
        <InventoryChart />
      </div>

      {/* Low Stock Alert */}
      <LowStockAlert products={products} />

      {/* Recent Activity */}
      <RecentActivity history={history} />

    </div>
  );
}

export default Dashboard;