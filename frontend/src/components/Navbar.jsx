import { useState, useEffect } from "react";

function Navbar() {

  const [darkMode, setDarkMode] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  /* ---------------------------
     DARK MODE TOGGLE
  ---------------------------- */

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  }, [darkMode]);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  /* ---------------------------
     LOGOUT
  ---------------------------- */

  const logout = () => {

    localStorage.removeItem("user");

    window.location.href = "/login";

  };


  return (

    <div className="h-16 bg-white dark:bg-gray-800 shadow flex items-center justify-between px-6">

      {/* SEARCH */}

      <input
        className="border px-3 py-1 rounded w-64 dark:bg-gray-700 dark:text-white"
        placeholder="Search product..."
      />


      {/* RIGHT SIDE */}

      <div className="flex items-center gap-5">

        {/* DARK MODE */}

        <button
          onClick={toggleDarkMode}
          className="border px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>


        {/* NOTIFICATION */}

        <div className="relative cursor-pointer">

          <span className="text-xl">🔔</span>

          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            2
          </span>

        </div>


        {/* USER */}

        <div className="flex items-center gap-2">

          <span className="text-xl">👤</span>

          <span className="text-sm font-medium dark:text-white">
            {user?.email || "User"}
          </span>

        </div>


        {/* LOGOUT */}

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Logout
        </button>

      </div>

    </div>

  );

}

export default Navbar;