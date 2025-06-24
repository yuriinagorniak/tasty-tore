import { useContext } from "react";
import { AuthContext } from "../contexts";

export const useUser = () => {
    const { user, handleLogout, forceCurrentUserUpdate } = useContext(AuthContext);
    return { user, handleLogout, forceCurrentUserUpdate };
};
