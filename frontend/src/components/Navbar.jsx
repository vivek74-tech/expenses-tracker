
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../hooks/users.hooks.api.js";

function Navbar() {
  const { userLogout } = useUserAuth();
  const navigate = useNavigate();

  const handlerButton = async (e) => {
    e.preventDefault();
    try {
      await userLogout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white px-4 py-4 sm:px-8 shadow-md border-b border-gray-200">
      <p className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight">
        Expenses Tracker
      </p>

      <button
        onClick={handlerButton}
        className="rounded-lg bg-red-500 px-5 py-2.5 font-medium text-white shadow-sm transition duration-200 hover:bg-red-600 hover:shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-300"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
