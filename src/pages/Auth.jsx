import { useContext, useState, useEffect, useReducer } from "react";
import { AuthContext } from "../contexts";
import { PageBanner, LabelledInput, GoogleLogo, SubmitButton } from "../shared";
import { useLocation, useNavigate, useParams } from "react-router";
import { useSnackbar } from "../hooks";
import { auth, googleAuthProvider } from "../db/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
} from "firebase/auth";
import { getFirebaseErrorMessage } from "../utils";
import CircularProgress from "@mui/material/CircularProgress";
import { ROUTES } from "../constants/routes";

const checkedData = (email = null, password = null) => {
    if (!email || !password || password.trim().length <= 0) {
        return false;
    }
    return true;
};

const getInitialValue = (authOption) => ({
    isRegistering: authOption === "signup",
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    loading: false,
    error: null,
});

const authActionTypes = {
    SET_IS_REGISTERING: "SET_IS_REGISTERING",
    SET_DISPLAY_NAME: "SET_DISPLAY_NAME",
    SET_EMAIL: "SET_EMAIL",
    SET_PASSWORD: "SET_PASSWORD",
    SET_PASSWORD_CONFIRM: "SET_PASSWORD_CONFIRM",
    SET_LOADING: "SET_LOADING",
    RESET_FORM: "RESET_FORM",
};

const reducer = (state, action) => {
    switch (action.type) {
        case authActionTypes.SET_IS_REGISTERING:
            return { ...state, isRegistering: action.payload };
        case authActionTypes.SET_DISPLAY_NAME:
            return { ...state, displayName: action.payload };
        case authActionTypes.SET_EMAIL:
            return { ...state, email: action.payload };
        case authActionTypes.SET_PASSWORD:
            return { ...state, password: action.payload };
        case authActionTypes.SET_PASSWORD_CONFIRM:
            return { ...state, passwordConfirm: action.payload };
        case authActionTypes.SET_LOADING:
            return { ...state, loading: action.payload };
        case authActionTypes.RESET_FORM:
            return { ...state, displayName: "", email: "", password: "", passwordConfirm: "" };
        default:
            return state;
    }
};

export const Auth = () => {
    const showMessage = useSnackbar();
    const authOption = useLocation().pathname.split("/").pop();

    const [authState, dispatch] = useReducer(reducer, authOption, getInitialValue);
    const { isRegistering, displayName, email, password, passwordConfirm, loading } = authState;
    console.log(authState);

    const { user, setUser, isCheckingAuth, error } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleAuthProvider)
            .then((credentials) => setUser(credentials.user))
            .catch((e) => showMessage(getFirebaseErrorMessage(e.code), "error"));
    };

    const handleEmailSignIn = async (email, password) => {
        if (checkedData(email, password)) {
            dispatch({ type: authActionTypes.SET_LOADING, payload: true });
            try {
                await signInWithEmailAndPassword(auth, email, password);
                dispatch({ type: authActionTypes.RESET_FORM });
            } catch (e) {
                showMessage(getFirebaseErrorMessage(e.code), "error");
            } finally {
                dispatch({ type: authActionTypes.SET_LOADING, payload: false });
            }
        }
    };

    const onEmailSignIn = (e) => {
        e.preventDefault();
        handleEmailSignIn(email, password);
    };

    const handleCreateProfile = async (email, password, displayName = "") => {
        dispatch({ type: authActionTypes.SET_LOADING, payload: true });
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, {
                displayName: displayName,
            });
            dispatch({ type: authActionTypes.RESET_FORM });
        } catch (e) {
            showMessage(getFirebaseErrorMessage(e.code), "error");
        } finally {
            dispatch({ type: authActionTypes.SET_LOADING, payload: false });
        }
    };

    const onRegistration = (e) => {
        e.preventDefault();
        if (displayName.trim().length <= 0) {
            console.log("Er");
            showMessage("Enter your name", "warning");
            return;
        }
        if (email.trim().length <= 0) {
            showMessage("Enter email", "warning");
            return;
        }
        if (password.trim().length <= 0) {
            showMessage("Enter password", "warning");
            return;
        }
        if (password !== passwordConfirm) {
            showMessage("Password don't match", "error");
            return;
        }

        handleCreateProfile(email, password, displayName);
    };

    const handleRegisteringChange = () => {
        dispatch({ type: authActionTypes.RESET_FORM });
        navigate(isRegistering ? ROUTES.AUTH.LOGIN : ROUTES.AUTH.SIGNUP);
    };

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

    console.log(loading);

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
                    ></PageBanner>
                    <section>
                        <div className="container pt-10 flex flex-col items-center justify-center gap-6">
                            {isRegistering ? (
                                <>
                                    <form className="w-[400px] flex flex-col gap-3 justify-center items-center">
                                        <LabelledInput
                                            title="Name"
                                            placeholder="Enter your name"
                                            id="name"
                                            required={true}
                                            value={displayName}
                                            onChange={(e) =>
                                                dispatch({
                                                    type: authActionTypes.SET_DISPLAY_NAME,
                                                    payload: e.target.value,
                                                })
                                            }
                                            type="text"
                                        />
                                        <LabelledInput
                                            title="Email"
                                            placeholder="Enter your email address"
                                            id="email"
                                            required={true}
                                            value={email}
                                            onChange={(e) =>
                                                dispatch({
                                                    type: authActionTypes.SET_EMAIL,
                                                    payload: e.target.value,
                                                })
                                            }
                                            type="email"
                                        />
                                        <LabelledInput
                                            title="Password"
                                            placeholder="Enter your password"
                                            id="password"
                                            required={true}
                                            value={password}
                                            onChange={(e) =>
                                                dispatch({
                                                    type: authActionTypes.SET_PASSWORD,
                                                    payload: e.target.value,
                                                })
                                            }
                                            type="password"
                                        />
                                        <LabelledInput
                                            title="Confirm password"
                                            placeholder="Confirm your password"
                                            id="passwordConfirm"
                                            required
                                            value={passwordConfirm}
                                            onChange={(e) =>
                                                dispatch({
                                                    type: authActionTypes.SET_PASSWORD_CONFIRM,
                                                    payload: e.target.value,
                                                })
                                            }
                                            type="password"
                                        />
                                        <SubmitButton onClick={onRegistration} loading={loading} />
                                    </form>

                                    <p className="text-center">
                                        Have an account?{" "}
                                        <span
                                            className="font-bold cursor-pointer"
                                            onClick={() => handleRegisteringChange(false)}
                                        >
                                            Log In
                                        </span>
                                    </p>
                                </>
                            ) : (
                                <>
                                    <form className="w-[400px] flex flex-col gap-3">
                                        <LabelledInput
                                            title="Email:"
                                            placeholder="Enter your email"
                                            id="email"
                                            required={true}
                                            value={email}
                                            onChange={(e) =>
                                                dispatch({
                                                    type: authActionTypes.SET_EMAIL,
                                                    payload: e.target.value,
                                                })
                                            }
                                            type="email"
                                        />
                                        <LabelledInput
                                            title="Password:"
                                            placeholder="Enter your password"
                                            id="password"
                                            required={true}
                                            value={password}
                                            onChange={(e) =>
                                                dispatch({
                                                    type: authActionTypes.SET_PASSWORD,
                                                    payload: e.target.value,
                                                })
                                            }
                                            type="password"
                                        />

                                        <SubmitButton onClick={onEmailSignIn} loading={loading} />
                                    </form>
                                    <p>
                                        Don't have an account?{" "}
                                        <span
                                            className="font-bold cursor-pointer"
                                            onClick={() => handleRegisteringChange(true)}
                                        >
                                            Sign Up
                                        </span>
                                    </p>
                                </>
                            )}
                            <div onClick={handleGoogleSignIn} className="w-10 h-10 cursor-pointer">
                                <GoogleLogo />
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
};
