function KPICards({ products = [], deliveries = [], receipts = [] }) {

  const totalProducts = products.length;

  const lowStock = products.filter(p => p.stock < 10).length;

  const pendingDeliveries = deliveries.filter(d => d.status === "Pending").length;

  const pendingReceipts = receipts.length;

  const cards = [
    { title: "Total Products", value: totalProducts },
    { title: "Low Stock Items", value: lowStock },
    { title: "Pending Receipts", value: pendingReceipts },
    { title: "Pending Deliveries", value: pendingDeliveries },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">

      {cards.map((card, index) => (

        <div
          key={index}
          className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
        >

          <h2 className="text-gray-500 text-sm mb-2">
            {card.title}
          </h2>

          <p className="text-3xl font-bold text-gray-800">
            {card.value}
          </p>

        </div>

      ))}

    </div>
  );
}

export default KPICards;