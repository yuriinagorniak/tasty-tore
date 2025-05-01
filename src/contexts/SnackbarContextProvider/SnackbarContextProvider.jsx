import { useState, useEffect, useCallback } from "react";
import { SnackbarContext } from "./SnackbarContext";

export const SnackbarContextProvider = ({ children }) => {
    const [snackpack, setSnackpack] = useState([]);
    const [messageInfo, setMessageInfo] = useState(null);
    const [messageOpened, setMessageOpened] = useState(false);

    const showMessage = useCallback((message, alertType = null) => {
        if (message.length > 0) {
            setSnackpack((prev) => [...prev, { message, alertType }]);
        }
    }, []);

    const handleClose = () => {
        setMessageOpened(false);
    };

    useEffect(() => {
        if (snackpack.length && !messageInfo) {
            setMessageInfo({ ...snackpack[0] });
            setSnackpack((prev) => [...prev.slice(1)]);
            setMessageOpened(true);
        } else if (snackpack.length && messageInfo) {
            setMessageOpened(false);
        }
    }, [snackpack, messageInfo]);

    const handleExited = () => {
        setMessageInfo(null);
    };
    
    const ctxValue = { messageOpened, messageInfo, showMessage, handleClose, handleExited };
   
    return <SnackbarContext.Provider value={ctxValue}>{children}</SnackbarContext.Provider>;
};
