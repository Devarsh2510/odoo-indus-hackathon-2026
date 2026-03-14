import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-6">

      {/* Logo / Title */}
      <h1 className="text-2xl font-bold mb-10">
        CoreInventory
      </h1>

      {/* Navigation */}
      <ul className="space-y-4">

        <li>
          <Link
            to="/"
            className="hover:text-blue-400 cursor-pointer"
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/products"
            className="hover:text-blue-400 cursor-pointer"
          >
            Products
          </Link>
        </li>

        <li>
          <Link
            to="/receipts"
            className="hover:text-blue-400 cursor-pointer"
          >
            Receipts
          </Link>
        </li>

        <li>
          <Link
            to="/deliveries"
            className="hover:text-blue-400 cursor-pointer"
          >
            Deliveries
          </Link>
        </li>

        <li>
          <Link
            to="/transfers"
            className="hover:text-blue-400 cursor-pointer"
          >
            Transfers
          </Link>
        </li>

        <li>
          <Link
            to="/adjustments"
            className="hover:text-blue-400 cursor-pointer"
          >
            Adjustments
          </Link>
        </li>

        <li>
          <Link
            to="/history"
            className="hover:text-blue-400 cursor-pointer"
          >
            Move History
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;