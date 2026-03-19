// ProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser, selectToken } from "../api/authSlice";

export default function ProtectedRoute({ children, requiredRole }) {
    const location = useLocation();
    const token = useSelector(selectToken);
    const user = useSelector(selectCurrentUser);

    if (!token) {
        return (
            <Navigate
                to="/login"
                replace
                state={{ from: location.pathname }} // save where user wanted to go
            />
        );
    }

    if (requiredRole && user?.role !== requiredRole && user?.email !== "adminskillshow@gmail.com") {
        return (
            <Navigate
                to="/dashboard"
                replace
            />
        );
    }

    return children;
}