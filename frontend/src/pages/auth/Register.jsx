import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = (e) => {

    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    // Save registered user
    localStorage.setItem("registeredUser", JSON.stringify(form));

    alert("Account created successfully!");

    navigate("/login");

  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Account
        </h2>

        <form onSubmit={handleRegister}>

          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
          />

          <button
            type="submit"
            className="bg-green-600 text-white w-full py-2 rounded mb-4"
          >
            Register
          </button>

        </form>

        <div className="text-center text-sm">

          <Link to="/login" className="text-blue-600 hover:underline">
            Already have an account? Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Register;