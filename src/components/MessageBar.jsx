import { useContext } from "react";

import { SnackbarContext } from "../contexts";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

export const MessageBar = () => {
    const { messageOpened, messageInfo, handleClose, handleExited } = useContext(SnackbarContext);
    const { message = "", alertType = null } = messageInfo || {};
    const hideDuration = 3000;
    const position = { vertical: "bottom", horizontal: "center" };

    return (
        <>
            {alertType ? (
                <Snackbar
                    open={messageOpened}
                    anchorOrigin={position}
                    autoHideDuration={hideDuration}
                    onClose={handleClose}
                    slotProps={{ transition: { onExited: handleExited } }}
                    // slots={{ transition: (props) => <Slide {...props} direction="up" /> }}
                    slots={{ transition: SlideTransition }}
                    key={SlideTransition.name}
                >
                    <Alert
                        onClose={handleClose}
                        severity={alertType}
                        variant="filled"
                        sx={{ width: "100%" }}
                    >
                        {message}
                    </Alert>
                </Snackbar>
            ) : (
                <Snackbar
                    open={messageOpened}
                    anchorOrigin={position}
                    onClose={handleClose}
                    message={message}
                    slots={{ transition: SlideTransition }}
                    key={SlideTransition.name}
                    // key={state.Transition.name}
                    autoHideDuration={hideDuration}
                    slotProps={{ transition: { onExited: handleExited } }}
                />
            )}
        </>
    );
};
