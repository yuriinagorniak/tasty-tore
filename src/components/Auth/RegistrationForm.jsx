import { authActionTypes } from "./reducers/authReducer";
import { PageBanner, LabelledInput, GoogleLogo, SubmitButton } from "../../shared";
import { useSnackbar } from "../../hooks";
import { auth } from "../../db/firebase";
import {
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { getFirebaseErrorMessage } from "../../utils";

export const RegistrationForm = ({ dispatch, authState, handleRegisteringChange }) => {
    const { displayName, email, password, passwordConfirm, loading } = authState;
    const showMessage = useSnackbar();

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

    return (
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
                <SubmitButton onClick={onRegistration} loading={loading}>Sign Up</SubmitButton>
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
    );
};
