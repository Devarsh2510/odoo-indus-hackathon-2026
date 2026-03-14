import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

function InventoryChart() {

  const data = [
    { name: "Steel Rod", stock: 120 },
    { name: "Plastic Table", stock: 40 },
    { name: "Wood Chair", stock: 6 },
    { name: "Iron Sheet", stock: 4 }
  ];

  return (
    <div>

      <h2 className="text-xl font-semibold mb-4">
        Stock Distribution
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="stock" fill="#3b82f6" />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default InventoryChart;