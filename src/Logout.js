import { Navigate } from "react-router-dom";
import { logout } from "./Api";

export default function Logout(props) {
    if (props.currentUser) {
        logout();
        return null;
    } else {
        return <Navigate to="/login" replace />
    }
}