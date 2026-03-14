import { useState } from "react";

function Receipts() {

  const [receipts, setReceipts] = useState([]);

  const [formData, setFormData] = useState({
    supplier: "",
    product: "",
    quantity: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const receiveStock = () => {

    const newReceipt = {
      id: receipts.length + 1,
      ...formData
    };

    setReceipts([...receipts, newReceipt]);

    setFormData({
      supplier: "",
      product: "",
      quantity: ""
    });
  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Receipts
      </h1>


      {/* Receive Stock Form */}

      <div className="bg-white p-6 rounded shadow-md w-96 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Receive Stock
        </h2>

        <input
          type="text"
          name="supplier"
          placeholder="Supplier Name"
          value={formData.supplier}
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
          onClick={receiveStock}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Receive Stock
        </button>

      </div>



      {/* Receipts Table */}

      <table className="w-full bg-white rounded shadow">

        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Supplier</th>
            <th className="p-3 text-left">Product</th>
            <th className="p-3 text-left">Quantity</th>
          </tr>
        </thead>

        <tbody>

          {receipts.map((receipt) => (

            <tr key={receipt.id} className="border-t">

              <td className="p-3">{receipt.supplier}</td>
              <td className="p-3">{receipt.product}</td>
              <td className="p-3">{receipt.quantity}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Receipts;