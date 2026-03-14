function Transfers() {

  const transfers = [
    { id: 1, from: "Main Warehouse", to: "Production Floor", product: "Steel Rod", qty: 20 },
    { id: 2, from: "Warehouse A", to: "Warehouse B", product: "Plastic Table", qty: 5 },
  ];

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">Internal Transfers</h1>

      <div className="bg-white rounded-lg shadow p-6">

        <table className="w-full">

          <thead className="border-b">
            <tr>
              <th className="text-left p-2">From</th>
              <th className="text-left p-2">To</th>
              <th className="text-left p-2">Product</th>
              <th className="text-left p-2">Quantity</th>
            </tr>
          </thead>

          <tbody>
            {transfers.map((t) => (
              <tr key={t.id} className="border-b">

                <td className="p-2">{t.from}</td>
                <td className="p-2">{t.to}</td>
                <td className="p-2">{t.product}</td>
                <td className="p-2">{t.qty}</td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Transfers;