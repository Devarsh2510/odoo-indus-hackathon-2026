import React from "react";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-10">CoreInventory</h1>

      <ul className="space-y-4">
        <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
        <li className="hover:text-blue-400 cursor-pointer">Products</li>
        <li className="hover:text-blue-400 cursor-pointer">Receipts</li>
        <li className="hover:text-blue-400 cursor-pointer">Deliveries</li>
        <li className="hover:text-blue-400 cursor-pointer">Transfers</li>
        <li className="hover:text-blue-400 cursor-pointer">Adjustments</li>
        <li className="hover:text-blue-400 cursor-pointer">Move History</li>
      </ul>
    </div>
  );
}

export default Sidebar;