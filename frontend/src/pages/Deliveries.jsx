import { useState } from "react";

function Deliveries() {

  const [deliveries, setDeliveries] = useState([
    { id: 1, customer: "ABC Store", product: "Steel Rod", quantity: 10, status: "Pending" },
    { id: 2, customer: "XYZ Ltd", product: "Wood Chair", quantity: 5, status: "Shipped" }
  ]);

  const [showForm, setShowForm] = useState(false);

  const [newDelivery, setNewDelivery] = useState({
    customer: "",
    product: "",
    quantity: ""
  });

  const handleChange = (e) => {
    setNewDelivery({
      ...newDelivery,
      [e.target.name]: e.target.value
    });
  };

  const addDelivery = () => {

    const delivery = {
      id: deliveries.length + 1,
      ...newDelivery,
      status: "Pending"
    };

    setDeliveries([...deliveries, delivery]);

    setNewDelivery({
      customer: "",
      product: "",
      quantity: ""
    });

    setShowForm(false);
  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Delivery Orders
      </h1>


      {/* Add Delivery Button */}

      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        + New Delivery
      </button>


      {/* Delivery Form */}

      {showForm && (

        <div className="bg-white p-6 rounded shadow-md mb-6 w-96">

          <h2 className="text-xl font-semibold mb-4">
            Create Delivery
          </h2>

          <input
            type="text"
            name="customer"
            placeholder="Customer Name"
            value={newDelivery.customer}
            onChange={handleChange}
            className="border p-2 w-full mb-3"
          />

          <input
            type="text"
            name="product"
            placeholder="Product"
            value={newDelivery.product}
            onChange={handleChange}
            className="border p-2 w-full mb-3"
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={newDelivery.quantity}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
          />

          <button
            onClick={addDelivery}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Create Delivery
          </button>

        </div>

      )}



      {/* Delivery Table */}

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