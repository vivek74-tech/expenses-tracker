import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
export const useUserAuth = () => {
    const { user, setUser } = useAuth();
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
                setUser(res.data.user);
                navigate("/");
            }
        } catch (error) {
            console.log(error.response?.data?.message || error.message);
        }
    };

  

    const userLogout = async () => {
        try {
            const res = await axios.get(
                "http://localhost:9000/api/v1/users/logout",
                {
                    withCredentials: true,
                },
            );

            if (res.data.success) {
                setUser(null);
            }
        } catch (error) {
            console.log(error.response?.data?.message || error.message);
        }
    };

    

    return {
        userRegister,
        userLogin,
        userLogout,
    };
};
