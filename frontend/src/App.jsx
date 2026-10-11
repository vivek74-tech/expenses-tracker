import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import Body from "./components/Body";
import View from "./components/View";
import Update from "./components/Update";

import Register from "./pages/Register";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
const appRouter = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },

    {
        element: <ProtectedRoute />,

        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/view/:id",
                element: <View />,
            },
            {
                path: "/update/:id",
                element: <Update />,
            },
        ],
    },
   
]);

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={appRouter} />
        </AuthProvider>
    );
}

export default App;
