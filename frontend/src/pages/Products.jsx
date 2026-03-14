function Products() {

  const products = [
    { id: 1, name: "Steel Rod", category: "Raw Material", stock: 120 },
    { id: 2, name: "Wood Chair", category: "Furniture", stock: 40 },
    { id: 3, name: "Plastic Table", category: "Furniture", stock: 15 },
  ];

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Products
      </h1>

      <table className="w-full bg-white shadow rounded-lg">

        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Product</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Stock</th>
          </tr>
        </thead>

        <tbody>

          {products.map((product) => (
            <tr key={product.id} className="border-t">

              <td className="p-3">
                {product.name}
              </td>

              <td className="p-3">
                {product.category}
              </td>

              <td className="p-3">
                {product.stock}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Products;