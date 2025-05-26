import { useContext, useEffect, useReducer } from "react";
import { AuthContext } from "../contexts";
import { PageBanner, LabelledInput, GoogleLogo, SubmitButton } from "../shared";
import { useLocation, useNavigate } from "react-router";

import { ROUTES } from "../constants/ROUTES";
import { AuthInputForm } from "../components/Auth";
import {
    authReducer,
    getAuthInitialValue,
    authActionTypes,
} from "../components/Auth/reducers/authReducer";

export const Auth = () => {
    const authOption = useLocation().pathname.split("/").pop();
    const [authState, dispatch] = useReducer(authReducer, authOption, getAuthInitialValue);
    const { isRegistering } = authState;
    const { user, setUser, isCheckingAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate(ROUTES.DASHBOARD);
        }
    }, [user]);

    useEffect(() => {
        if (authOption) {
            dispatch({
                type: authActionTypes.SET_IS_REGISTERING,
                payload: authOption === "signup",
            });
        }
    }, [authOption]);

    if (user) {
        return null;
    }

    return (
        <>
            {isCheckingAuth ? (
                <p>Loading...</p>
            ) : (
                <>
                    <PageBanner
                        pageTitle={
                            isRegistering
                                ? "Sign up to save recipes, plan meals, and build shopping lists."
                                : "Welcome Back"
                        }
                    />
                    <AuthInputForm authState={authState} dispatch={dispatch} setUser={setUser} />
                </>
            )}
        </>
    );
};
