import KPICards from "../components/KPICards";
import InventoryChart from "../components/InventoryChart";

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

export default Dashboard;