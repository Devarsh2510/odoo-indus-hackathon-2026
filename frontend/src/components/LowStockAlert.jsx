function LowStockAlert({ products }) {

  const lowStock = products.filter(product => product.stock < 10);

  return (

    <div className="bg-white shadow rounded p-6 mt-6">

      <h2 className="text-xl font-bold mb-4">
        ⚠ Low Stock Items
      </h2>

      {lowStock.length === 0 ? (

        <p className="text-green-600">
          All products have sufficient stock
        </p>

      ) : (

        <ul>

          {lowStock.map(product => (

            <li key={product.id} className="text-red-600 mb-2">

              {product.name} — Stock: {product.stock}

            </li>

          ))}

        </ul>

      )}

    </div>

  );
}

export default LowStockAlert;