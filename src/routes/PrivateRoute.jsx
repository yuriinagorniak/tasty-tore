import { useContext } from "react";
import { AuthContext } from "../contexts";
import { Outlet, Navigate } from "react-router";
import { useUser } from "../hooks/useUser";
import { ROUTES } from "../constants/routes";

export const PrivateRoute = () => {
    const { user } = useUser();

    return user ? <Outlet /> : <Navigate to={ROUTES.AUTH.LOGIN} />;
};
