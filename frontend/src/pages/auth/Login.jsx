import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {

    e.preventDefault();

    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!registeredUser) {
      alert("Please create an account first");
      return;
    }

    if (
      form.email === registeredUser.email &&
      form.password === registeredUser.password
    ) {

      // Save logged-in user
      localStorage.setItem("user", JSON.stringify(form));

      // Redirect to dashboard
      navigate("/");

    } else {

      alert("Invalid email or password");

    }

  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        <form onSubmit={handleLogin}>

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
            className="bg-blue-600 text-white w-full py-2 rounded mb-4"
          >
            Login
          </button>

        </form>

        <div className="flex justify-between text-sm">

          <Link to="/register" className="text-blue-600 hover:underline">
            Create account
          </Link>

          <Link to="/forgot-password" className="text-blue-600 hover:underline">
            Forgot Password?
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;