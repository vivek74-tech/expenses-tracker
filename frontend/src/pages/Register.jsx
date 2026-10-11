
import { useState } from "react";
import { useUserAuth } from "../hooks/users.hooks.api.js";
import { Link } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { userRegister } = useUserAuth();

  const registerHandler = async (e) => {
    e.preventDefault();
    userRegister({ form });
  };

  return (
    <form
      onSubmit={registerHandler}
      className="mx-auto my-10 w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8"
    >
      <h2 className="mb-2 text-3xl font-bold text-gray-800">
        Create Account
      </h2>

      <p className="mb-7 text-sm text-gray-500">
        Register to manage your expenses.
      </p>

      <input
        type="text"
        placeholder="Full Name"
        value={form.fullName}
        onChange={(e) =>
          setForm({ ...form, fullName: e.target.value })
        }
        className="mb-4 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
        className="mb-4 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
        className="mb-5 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        required
      />

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-95"
      >
        Register
      </button>

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
        >
          Login
        </Link>
      </p>
    </form>
  );
}

export default Register;
