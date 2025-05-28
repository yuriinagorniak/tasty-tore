import { useState, useEffect, useCallback, useMemo } from "react";
import { AuthContext } from "./AuthContext";
import { app, db, auth } from "../../db/firebase";
import { GoogleAuthProvider, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const AuthContextProvider = ({ children }) => {
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(async (currentUser) => {
            setUser(currentUser);
            setIsCheckingAuth(false);
            setError(null);

            if (currentUser) {
                try {
                    const userRef = doc(db, "users", currentUser.uid);
                    const docSnap = await getDoc(userRef);

                    if (!docSnap.exists()) {
                        await setDoc(userRef, {
                            uid: currentUser.uid,
                            email: currentUser.email,
                            createdAt: new Date(),
                        });
                    }
                } catch (e) {
                    console.log("Error creating user doc: ", e);
                }
            }
        });

        return unsub;
    }, []);

    const handleLogout = useCallback(async () => {
        await signOut(auth)
            .then(() => setUser(null))
            .catch((e) => setError(e.message));
    }, []);

    const ctxValue = useMemo(() => ({
        user,
        setUser,
        error,
        isCheckingAuth,
        handleLogout,
    }), [user, error, isCheckingAuth, handleLogout]);
    return <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>;
};
