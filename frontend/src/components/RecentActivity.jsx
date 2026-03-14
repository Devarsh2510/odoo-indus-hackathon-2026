function RecentActivity({ history }) {

  return (

    <div className="bg-white shadow rounded p-6 mt-6">

      <h2 className="text-xl font-bold mb-4">
        Recent Activity
      </h2>

      <table className="w-full">

        <thead className="border-b">
          <tr>
            <th className="text-left p-2">Product</th>
            <th className="text-left p-2">Action</th>
            <th className="text-left p-2">Quantity</th>
            <th className="text-left p-2">Date</th>
          </tr>
        </thead>

        <tbody>

          {history.map(item => (

            <tr key={item.id} className="border-b">

              <td className="p-2">{item.product}</td>
              <td className="p-2">{item.action}</td>
              <td className="p-2">{item.quantity}</td>
              <td className="p-2">{item.date}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default RecentActivity;