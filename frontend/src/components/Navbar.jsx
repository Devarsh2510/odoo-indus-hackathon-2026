function Navbar() {
  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">
      <input
        className="border px-3 py-1 rounded"
        placeholder="Search product..."
      />

      <div className="flex gap-4">
        <span>🔔</span>
        <span>👤</span>
      </div>
    </div>
  );
}

export default Navbar;