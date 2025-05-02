import { useContext } from "react";
import { SnackbarContext } from "../contexts";

export const useSnackbar = () => {
    const { showMessage } = useContext(SnackbarContext);
    return showMessage;
}