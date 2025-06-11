
'use client';
import React, { use, useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/authenticate`,
        { email, password }
      );
      if (res.data.token) {
        localStorage.setItem("authToken", res.data.token);
        // Redirect or show success (replace with your navigation logic)
        window.location.href = "/user/manage-notes";
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please check your credentials."
      );
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-black mb-6">🔐 Login to Vidio Notes</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-xl text-lg font-semibold hover:bg-red-600 shadow-md transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="text-center mt-4 text-sm text-gray-600">
          <a href="#" className="text-red-500 hover:underline">Forgot Password?</a>
        </div>
        <p className="text-center text-sm text-gray-600 mt-2">
          Don't have an account? <a href="#" className="text-red-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
