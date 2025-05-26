import { useEffect, useState } from "react";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../db/firebase";
import { useSnackbar } from "./useSnackbar";
import { getFirebaseErrorMessage } from "../utils";
import { useUser } from "./useUser";

export const useFirestore = (dataKey = null, defaultValue) => {
    const { user } = useUser();
    const [data, setData] = useState(defaultValue);
    const [isFetched, setIsFetched] = useState(false);
    const showMessage = useSnackbar();

    useEffect(() => {
        if (!user) {
            setData(defaultValue);
            setIsFetched(false);
            return;
        }

        const dataRef = doc(db, "users", user.uid, "data", dataKey);

        const unsubscribe = onSnapshot(
            dataRef,
            (docSnap) => {
                if (docSnap.exists()) {
                    const docData = docSnap.data();
                    if (docData && docData.items) {
                        setData(docData.items);
                    } else {
                        setData(defaultValue);
                    }
                } else {
                    setData(defaultValue);
                }
                setIsFetched(true);
            },
            (e) => {
                console.error("Failed to fetch shopping list from Firestore:", e);
                showMessage(getFirebaseErrorMessage(e.code), "error");
            }
        );

        return () => unsubscribe();
    }, [user]);

    useEffect(() => {
        const saveData = async () => {
            if (!user || !isFetched || !dataKey) {
                return;
            }
            try {
                const dataRef = doc(db, "users", user.uid, "data", dataKey);
                await setDoc(dataRef, { items: data });
            } catch (e) {
                console.error("Failed to save shopping list to Firestore:", e);
                showMessage(getFirebaseErrorMessage(e.code), "error");
            }
        };

        saveData();
    }, [data, user, isFetched, dataKey]);

    return [data, setData];
};
