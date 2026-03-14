function MoveHistory() {

  const history = [
    { id: 1, product: "Steel Rod", action: "Receipt", quantity: 50, date: "2026-03-14" },
    { id: 2, product: "Steel Rod", action: "Transfer", quantity: -20, date: "2026-03-15" },
    { id: 3, product: "Plastic Table", action: "Delivery", quantity: -5, date: "2026-03-16" },
  ];

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">Stock Move History</h1>

      <div className="bg-white rounded-lg shadow p-6">

        <table className="w-full">

          <thead className="border-b">
            <tr>
              <th className="text-left p-2">Product</th>
              <th className="text-left p-2">Action</th>
              <th className="text-left p-2">Quantity</th>
              <th className="text-left p-2">Date</th>
            </tr>
          </thead>

          <tbody>
            {history.map((item) => (
              <tr key={item.id} className="border-b">

                <td className="p-2">{item.product}</td>
                <td className="p-2">{item.action}</td>
                <td className="p-2">{item.quantity}</td>
                <td className="p-2">{item.date}</td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default MoveHistory;