import { GoogleLogo } from "../../shared";
import { useNavigate } from "react-router";
import { useSnackbar } from "../../hooks";
import { auth, googleAuthProvider } from "../../db/firebase";
import { signInWithPopup } from "firebase/auth";
import { getFirebaseErrorMessage } from "../../utils";
import { ROUTES } from "../../constants/ROUTES";
import { authActionTypes } from "./reducers/authReducer";
import { RegistrationForm } from "./RegistrationForm";
import { LoginForm } from "./LoginForm";

export const AuthInputForm = ({ authState, dispatch, setUser }) => {
    const showMessage = useSnackbar();
    const navigate = useNavigate();

    const { isRegistering } = authState;

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleAuthProvider)
            .then((credentials) => setUser(credentials.user))
            .catch((e) => showMessage(getFirebaseErrorMessage(e.code), "error"));
    };

    const handleRegisteringChange = () => {
        dispatch({ type: authActionTypes.RESET_FORM });
        navigate(isRegistering ? ROUTES.AUTH.LOGIN : ROUTES.AUTH.SIGNUP);
    };

    return (
        <section>
            <div className="container pt-10 flex flex-col items-center justify-center gap-6">
                {isRegistering ? (
                    <RegistrationForm
                        dispatch={dispatch}
                        authState={authState}
                        handleRegisteringChange={handleRegisteringChange}
                    />
                ) : (
                    <LoginForm
                        dispatch={dispatch}
                        authState={authState}
                        handleRegisteringChange={handleRegisteringChange}
                    />
                )}
                <div onClick={handleGoogleSignIn} className="w-10 h-10 cursor-pointer">
                    <GoogleLogo />
                </div>
            </div>
        </section>
    );
};
