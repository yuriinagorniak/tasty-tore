import { authActionTypes } from "./reducers/authReducer";
import { PageBanner, LabelledInput, GoogleLogo, SubmitButton } from "../../shared";
import { useSnackbar } from "../../hooks";
import { auth } from "../../db/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getFirebaseErrorMessage } from "../../utils";

const checkedData = (email = null, password = null) => {
    if (!email || !password || password.trim().length <= 0) {
        return false;
    }
    return true;
};

export const LoginForm = ({ dispatch, authState, handleRegisteringChange }) => {
    const { email, password, loading } = authState;
    const showMessage = useSnackbar();
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
        } else {
            showMessage("Incorrect email or password. Please try again.", "error");
        }
    };

    const onEmailSignIn = (e) => {
        e.preventDefault();
        handleEmailSignIn(email, password);
    };

    return (
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
    );
};
