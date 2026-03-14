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

  // EXPORT CSV
  const exportCSV = () => {

    const headers = ["Name", "SKU", "Price", "Stock"];

    const rows = products.map(product => [
      product.name,
      product.sku,
      product.price,
      product.stock
    ]);

    const csvContent =
      [headers, ...rows]
        .map(row => row.join(","))
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", "products.csv");

    link.click();
  };

  // ADD OR UPDATE PRODUCT
  const addProduct = () => {

    if (editIndex !== null) {

      const updatedProducts = [...products];
      updatedProducts[editIndex] = newProduct;

      setProducts(updatedProducts);
      setEditIndex(null);

    } else {

      const product = {
        id: products.length + 1,
        ...newProduct
      };

      setProducts([...products, product]);

    }

    setNewProduct({
      name: "",
      sku: "",
      price: "",
      stock: ""
    });

    setShowForm(false);
  };

  // DELETE PRODUCT
  const deleteProduct = (index) => {

    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);

  };

  // EDIT PRODUCT
  const editProduct = (index) => {

    const product = products[index];

    setNewProduct(product);
    setEditIndex(index);
    setShowForm(true);

  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">Products</h1>

      {/* SEARCH + SORT + ACTIONS */}

      <div className="flex gap-4 mb-4">

        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-64"
        />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>

        <button
          onClick={() => {
            setShowForm(true);
            setEditIndex(null);
          }}
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


      {/* Product Form */}

      {showForm && (

        <div className="bg-white p-6 rounded shadow-md mb-6 w-96">

          <h2 className="text-xl font-semibold mb-4">
            {editIndex !== null ? "Edit Product" : "Add Product"}
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={handleChange}
            className="border p-2 w-full mb-3"
          />

          <input
            type="text"
            name="sku"
            placeholder="SKU"
            value={newProduct.sku}
            onChange={handleChange}
            className="border p-2 w-full mb-3"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleChange}
            className="border p-2 w-full mb-3"
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={newProduct.stock}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
          />

          <button
            onClick={addProduct}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            {editIndex !== null ? "Update Product" : "Save Product"}
          </button>

        </div>

      )}


      {/* Product Table */}

      <table className="w-full bg-white rounded shadow">

        <thead className="bg-gray-200">
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
            .filter((product) =>
              product.name.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) => {

              if (sortBy === "name") return a.name.localeCompare(b.name);
              if (sortBy === "price") return a.price - b.price;
              if (sortBy === "stock") return a.stock - b.stock;

              return 0;

            })
            .map((product, index) => (

              <tr key={product.id} className="border-t">

                <td className="p-3">{product.name}</td>
                <td className="p-3">{product.sku}</td>
                <td className="p-3">₹{product.price}</td>
                <td className="p-3">{product.stock}</td>

                <td className="p-3">

                  <button
                    onClick={() => editProduct(index)}
                    className="bg-yellow-500 text-white px-3 py-1 mr-2 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteProduct(index)}
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