import { useState } from "react";

function ForgotPassword() {

  const [email, setEmail] = useState("");

  const handleReset = () => {

    alert("Password reset link sent to " + email);

  };

  return (

    <div className="h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Forgot Password
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-4"
        />

        <button
          onClick={handleReset}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Reset Password
        </button>

      </div>

    </div>

  );

}

export default ForgotPassword;