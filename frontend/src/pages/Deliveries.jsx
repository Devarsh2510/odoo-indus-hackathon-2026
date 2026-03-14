function Deliveries() {
  const deliveries = [
    { id: 1, customer: "ABC Store", product: "Steel Rod", quantity: 10, status: "Pending" },
    { id: 2, customer: "XYZ Ltd", product: "Wood Chair", quantity: 5, status: "Shipped" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Delivery Orders</h1>

      <div className="bg-white rounded-lg shadow p-6">

        <table className="w-full">

          <thead className="border-b">
            <tr>
              <th className="text-left p-2">Customer</th>
              <th className="text-left p-2">Product</th>
              <th className="text-left p-2">Quantity</th>
              <th className="text-left p-2">Status</th>
            </tr>
          </thead>

          <tbody>
            {deliveries.map((item) => (
              <tr key={item.id} className="border-b">

                <td className="p-2">{item.customer}</td>
                <td className="p-2">{item.product}</td>
                <td className="p-2">{item.quantity}</td>
                <td className="p-2">{item.status}</td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}

export default Deliveries;