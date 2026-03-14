function Adjustments() {

  const adjustments = [
    { id: 1, product: "Steel Rod", oldStock: 100, newStock: 97, reason: "Damaged" },
    { id: 2, product: "Plastic Table", oldStock: 40, newStock: 42, reason: "Stock Correction" },
  ];

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">Stock Adjustments</h1>

      <div className="bg-white rounded-lg shadow p-6">

        <table className="w-full">

          <thead className="border-b">
            <tr>
              <th className="text-left p-2">Product</th>
              <th className="text-left p-2">Old Stock</th>
              <th className="text-left p-2">New Stock</th>
              <th className="text-left p-2">Reason</th>
            </tr>
          </thead>

          <tbody>
            {adjustments.map((adj) => (
              <tr key={adj.id} className="border-b">

                <td className="p-2">{adj.product}</td>
                <td className="p-2">{adj.oldStock}</td>
                <td className="p-2">{adj.newStock}</td>
                <td className="p-2">{adj.reason}</td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Adjustments;