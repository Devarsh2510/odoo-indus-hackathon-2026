import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

function DeliveryChart() {

  const data = [
    { day: "Mon", deliveries: 4 },
    { day: "Tue", deliveries: 6 },
    { day: "Wed", deliveries: 3 },
    { day: "Thu", deliveries: 7 },
    { day: "Fri", deliveries: 5 }
  ];

  return (
    <div>

      <h2 className="text-xl font-semibold mb-4">
        Delivery Trends
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="deliveries"
            stroke="#10b981"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default DeliveryChart;