import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

function InventoryChart() {

  const data = {
    labels: ["Products", "Receipts", "Deliveries", "Transfers"],
    datasets: [
      {
        label: "Inventory Activity",
        data: [120, 50, 30, 20],
        backgroundColor: "#3b82f6"
      }
    ]
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">
        Inventory Activity
      </h2>

      <Bar data={data} />
    </div>
  );
}

export default InventoryChart;