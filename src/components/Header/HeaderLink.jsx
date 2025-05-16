import { NavLink, useLocation } from "react-router";
import "./style.css";

export const HeaderLink = ({ path, children }) => {
    const location = useLocation();
    return (
        <NavLink className={`custom-link ${location.pathname === path && "selected"}`} to={path}>
            {children}
        </NavLink>
    );
};
