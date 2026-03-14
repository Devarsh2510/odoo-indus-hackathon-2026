function KPICards() {

  const cards = [
    { title: "Total Products", value: 120 },
    { title: "Low Stock Items", value: 8 },
    { title: "Pending Receipts", value: 5 },
    { title: "Pending Deliveries", value: 6 },
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