import { useState } from "react";

function Transfers() {

  const [transfers, setTransfers] = useState([]);

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    product: "",
    quantity: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addTransfer = () => {

    const transfer = {
      id: transfers.length + 1,
      ...formData
    };

    setTransfers([...transfers, transfer]);

    setFormData({
      from: "",
      to: "",
      product: "",
      quantity: ""
    });

  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Internal Transfers
      </h1>


      {/* Transfer Form */}

      <div className="bg-white p-6 rounded shadow-md w-96 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Create Transfer
        </h2>

        <input
          type="text"
          name="from"
          placeholder="From Warehouse"
          value={formData.from}
          onChange={handleChange}
          className="border p-2 w-full mb-3"
        />

        <input
          type="text"
          name="to"
          placeholder="To Warehouse"
          value={formData.to}
          onChange={handleChange}
          className="border p-2 w-full mb-3"
        />

        <input
          type="text"
          name="product"
          placeholder="Product"
          value={formData.product}
          onChange={handleChange}
          className="border p-2 w-full mb-3"
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />

        <button
          onClick={addTransfer}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create Transfer
        </button>

      </div>


      {/* Transfers Table */}

      <table className="w-full bg-white rounded shadow">

        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">From</th>
            <th className="p-3 text-left">To</th>
            <th className="p-3 text-left">Product</th>
            <th className="p-3 text-left">Quantity</th>
          </tr>
        </thead>

        <tbody>

          {transfers.map((item) => (

            <tr key={item.id} className="border-t">

              <td className="p-3">{item.from}</td>
              <td className="p-3">{item.to}</td>
              <td className="p-3">{item.product}</td>
              <td className="p-3">{item.quantity}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Transfers;