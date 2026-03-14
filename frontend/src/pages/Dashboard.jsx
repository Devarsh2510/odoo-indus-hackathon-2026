import KPICards from "../components/KPICards";
import InventoryChart from "../components/InventoryChart";
import DeliveryChart from "../components/DeliveryChart";
import LowStockAlert from "../components/LowStockAlert";
import RecentActivity from "../components/RecentActivity";

function Dashboard() {

  const products = [
    { id: 1, name: "Steel Rod", stock: 120 },
    { id: 2, name: "Plastic Table", stock: 40 },
    { id: 3, name: "Wood Chair", stock: 6 },
    { id: 4, name: "Iron Sheet", stock: 4 }
  ];

  const deliveries = [
    { id: 1, status: "Pending" },
    { id: 2, status: "Shipped" }
  ];

  const receipts = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ];

  const history = [
    { id: 1, product: "Steel Rod", action: "Receipt", quantity: 50, date: "2026-03-14" },
    { id: 2, product: "Steel Rod", action: "Transfer", quantity: -20, date: "2026-03-15" },
    { id: 3, product: "Plastic Table", action: "Delivery", quantity: -5, date: "2026-03-16" }
  ];

  // Detect low stock
  const lowStockProducts = products.filter(p => p.stock < 10);

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold dark:text-white">
        Dashboard
      </h1>

      {/* Low Stock Notification */}
      {lowStockProducts.length > 0 && (
        <div className="bg-red-100 border border-red-300 text-red-700 p-4 rounded-lg">
          ⚠ Low stock alert: {lowStockProducts.length} products need restocking
        </div>
      )}

      {/* KPI Cards */}
      <KPICards
        products={products}
        deliveries={deliveries}
        receipts={receipts}
      />

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <InventoryChart />
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <DeliveryChart />
        </div>

      </div>

      {/* Low Stock + Activity */}
      <div className="grid grid-cols-2 gap-6">

        <LowStockAlert products={products} />

        <RecentActivity history={history} />

      </div>

    </div>
  );
}

export default Dashboard;