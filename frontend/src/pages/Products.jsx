import { useState } from "react";

function Products() {

  const [products, setProducts] = useState([
    { id: 1, name: "Steel Rod", sku: "SR001", price: 200, stock: 120 },
    { id: 2, name: "Plastic Table", sku: "PT002", price: 80, stock: 40 }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  const [newProduct, setNewProduct] = useState({
    name: "",
    sku: "",
    price: "",
    stock: ""
  });

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value
    });
  };

  const exportCSV = () => {

    const headers = ["Name", "SKU", "Price", "Stock"];

    const rows = products.map(p => [
      p.name,
      p.sku,
      p.price,
      p.stock
    ]);

    const csvContent =
      [headers, ...rows]
        .map(r => r.join(","))
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", "products.csv");
    link.click();
  };

  const addProduct = () => {

    if (editIndex !== null) {

      const updated = [...products];
      updated[editIndex] = newProduct;
      setProducts(updated);
      setEditIndex(null);

    } else {

      setProducts([...products, {
        id: products.length + 1,
        ...newProduct
      }]);

    }

    setNewProduct({ name:"", sku:"", price:"", stock:"" });
    setShowForm(false);
  };

  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const editProduct = (index) => {
    setNewProduct(products[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">Products</h1>

      {/* Controls */}
      <div className="flex gap-4">

        <input
          placeholder="Search product..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="border rounded p-2 w-60"
        />

        <select
          value={sortBy}
          onChange={(e)=>setSortBy(e.target.value)}
          className="border rounded p-2"
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>

        <button
          onClick={()=>{setShowForm(true);setEditIndex(null)}}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Product
        </button>

        <button
          onClick={exportCSV}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Export CSV
        </button>

      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white p-6 rounded-xl shadow w-96">

          <h2 className="text-xl font-semibold mb-4">
            {editIndex !== null ? "Edit Product" : "Add Product"}
          </h2>

          <input name="name" placeholder="Product Name"
            value={newProduct.name}
            onChange={handleChange}
            className="border p-2 w-full mb-3"/>

          <input name="sku" placeholder="SKU"
            value={newProduct.sku}
            onChange={handleChange}
            className="border p-2 w-full mb-3"/>

          <input name="price" type="number" placeholder="Price"
            value={newProduct.price}
            onChange={handleChange}
            className="border p-2 w-full mb-3"/>

          <input name="stock" type="number" placeholder="Stock"
            value={newProduct.stock}
            onChange={handleChange}
            className="border p-2 w-full mb-4"/>

          <button
            onClick={addProduct}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Save Product
          </button>

        </div>
      )}

      {/* Table */}
      <table className="w-full bg-white rounded-xl shadow">

        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">SKU</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Stock</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>

          {products
          .filter(p=>p.name.toLowerCase().includes(search.toLowerCase()))
          .sort((a,b)=>{
            if(sortBy==="name") return a.name.localeCompare(b.name)
            if(sortBy==="price") return a.price-b.price
            if(sortBy==="stock") return a.stock-b.stock
            return 0
          })
          .map((p,index)=>(

            <tr key={p.id} className="border-t hover:bg-gray-50">

              <td className="p-3">{p.name}</td>
              <td className="p-3">{p.sku}</td>
              <td className="p-3">₹{p.price}</td>
              <td className="p-3">{p.stock}</td>

              <td className="p-3 flex gap-2">

                <button
                  onClick={()=>editProduct(index)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={()=>deleteProduct(index)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Products;