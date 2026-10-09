import { useState } from "react";
import { useUserAuth } from "../hooks/users.hooks.api.js";

function Register() {
const [form, setForm] = useState({
fullName: "",
email: "",
password: "",
});

  const {userRegister}=useUserAuth();


const registerHandler = async (e) => {
e.preventDefault();

userRegister({form});


};

return ( <form onSubmit={registerHandler} className="max-w-sm mx-auto p-4"> <h2 className="text-xl font-bold mb-4">Register</h2>


  <input
    type="text"
    placeholder="Full Name"
    value={form.fullName}
    onChange={(e) =>
      setForm({ ...form, fullName: e.target.value })
    }
    className="border p-2 w-full mb-3"
    required
  />

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
    Register
  </button>
</form>


);
}

export default Register;
