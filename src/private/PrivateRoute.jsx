import { useContext } from "react";
import { Authcontex } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontex);

    if (loading) {
        return <span className='flex justify-center items-center'>Loading...</span>;
    }

    if (user) {
        return children;
    }

    // Redirect to login page with intended destination as state
    return <Navigate to='/kali' state={{ from: window.location.pathname }} />;
};

export default PrivateRoute;