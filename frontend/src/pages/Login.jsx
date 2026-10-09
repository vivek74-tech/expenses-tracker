import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUserAuth } from "../hooks/users.hooks.api.js";
function Login() {
const [form, setForm] = useState({
email: "",
password: "",
});

const {userLogin}=useUserAuth();



const loginHandler = async (e) => {
e.preventDefault();
userLogin({form});
};

return ( <form onSubmit={loginHandler} className="max-w-sm mx-auto p-4"> <h2 className="text-xl font-bold mb-4">Login</h2>

  <input
    type="email"
    placeholder="Email"
    value={form.email}
    onChange={(e) =>
      setForm({ ...form, email: e.target.value })
    }
    className="border p-2 w-full mb-3"
    required
  />

  <input
    type="password"
    placeholder="Password"
    value={form.password}
    onChange={(e) =>
      setForm({ ...form, password: e.target.value })
    }
    className="border p-2 w-full mb-3"
    required
  />

  <button
    type="submit"
    className="bg-gray-700 text-white p-2 w-full rounded"
  >
    Login
  </button>
</form>


);
}

export default Login;
