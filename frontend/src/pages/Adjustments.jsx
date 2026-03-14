import { useState } from "react";

function Adjustments() {

  const [adjustments, setAdjustments] = useState([]);

  const [formData, setFormData] = useState({
    product: "",
    oldStock: "",
    newStock: "",
    reason: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addAdjustment = () => {

    const adjustment = {
      id: adjustments.length + 1,
      ...formData
    };

    setAdjustments([...adjustments, adjustment]);

    setFormData({
      product: "",
      oldStock: "",
      newStock: "",
      reason: ""
    });

  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Stock Adjustments
      </h1>


      {/* Adjustment Form */}

      <div className="bg-white p-6 rounded shadow-md w-96 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Adjust Stock
        </h2>

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
          name="oldStock"
          placeholder="Old Stock"
          value={formData.oldStock}
          onChange={handleChange}
          className="border p-2 w-full mb-3"
        />

        <input
          type="number"
          name="newStock"
          placeholder="New Stock"
          value={formData.newStock}
          onChange={handleChange}
          className="border p-2 w-full mb-3"
        />

        <input
          type="text"
          name="reason"
          placeholder="Reason"
          value={formData.reason}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />

        <button
          onClick={addAdjustment}
          className="bg-orange-600 text-white px-4 py-2 rounded"
        >
          Adjust Stock
        </button>

      </div>


      {/* Adjustment Table */}

      <table className="w-full bg-white rounded shadow">

        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Product</th>
            <th className="p-3 text-left">Old Stock</th>
            <th className="p-3 text-left">New Stock</th>
            <th className="p-3 text-left">Reason</th>
          </tr>
        </thead>

        <tbody>

          {adjustments.map((item) => (

            <tr key={item.id} className="border-t">

              <td className="p-3">{item.product}</td>
              <td className="p-3">{item.oldStock}</td>
              <td className="p-3">{item.newStock}</td>
              <td className="p-3">{item.reason}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Adjustments;