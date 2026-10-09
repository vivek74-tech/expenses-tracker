import axios from "axios";
import { useNavigate } from "react-router-dom";
export const useUserAuth = () => {
    const navigate = useNavigate();

    const userRegister = async ({ form }) => {
        try {
            const res = await axios.post(
                "http://localhost:9000/api/v1/users/register",
                form,
            );

            if (res.data.success) {
                navigate("/login");
            }
        } catch (error) {
            console.log(error.response?.data?.message || error.message);
        }
    };

    const userLogin = async ({ form }) => {
        try {
            const res = await axios.post(
                "http://localhost:9000/api/v1/users/login",
                form,
                { withCredentials: true },
            );

            if (res.data.success) {
                navigate("/");
            }
        } catch (error) {
            console.log(error.response?.data?.message || error.message);
        }
    };

    return {
        userRegister,
        userLogin,
    };
};
