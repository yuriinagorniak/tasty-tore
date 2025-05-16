import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { app, auth } from "../../db/firebase";
import { GoogleAuthProvider, signOut } from "firebase/auth";



export const AuthContextProvider = ({ children }) => {
    // const auth = getAuth(app);
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsub = auth.onAuthStateChanged((currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
            setIsCheckingAuth(false);
            setError(null);
        });

        return unsub;
    }, [auth]);

    const handleLogout = async () => {
        await signOut(auth)
            .then(() => setUser(null))
            .catch((e) => setError(e.message));
    };

    const ctxValue = {
        user,
        setUser,
        error,
        isCheckingAuth,
        handleLogout,
    };
    return <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>;
};
