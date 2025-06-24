import { useState, useEffect } from "react";
import { auth } from "../../db/firebase";
import { Input, LabelledInput, TransparentButton } from "../../shared";
import {
    updateProfile,
    updatePassword,
    reauthenticateWithCredential,
    updateEmail,
} from "firebase/auth";
import { getFirebaseErrorMessage } from "../../utils";
import { useSnackbar } from "../../hooks";
import { EmailAuthProvider } from "firebase/auth/web-extension";
import { useContext } from "react";
import { AuthContext } from "../../contexts";
import { CircularProgress } from "@mui/material";

export const UpdateUserDetailsForm = () => {
    const { user, forceCurrentUserUpdate } = useContext(AuthContext);
    const [email, setEmail] = useState(user.email ?? "");
    const [emailChanged, setEmailChanged] = useState(false);
    const [displayName, setDisplayName] = useState(user.displayName ?? "");
    const [displayNameChanged, setDisplayNameChanged] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [passwordChanged, setPasswordChanged] = useState(false);
    const [dataIsUpdating, setDataIsUpdating] = useState(false);
    const showMessage = useSnackbar();

    const resetForm = () => {
        setCurrentPassword("");
        setNewPassword("");
        setEmailChanged(false);
        setDisplayNameChanged(false);
        setPasswordChanged(false);
    };

    const handleEmailUpdate = (e) => {
        setEmail(() => {
            const newValue = e.target.value;
            setEmailChanged(newValue !== user.email);
            return newValue;
        });
    };
    const reauthenticateUser = async (currentPassword) => {
        const user = auth.currentUser;
        const credential = EmailAuthProvider.credential(user.email, currentPassword);
        await reauthenticateWithCredential(user, credential);
    };

    const handleDisplayNameUpdate = (e) => {
        setDisplayName(() => {
            const newValue = e.target.value;
            setDisplayNameChanged(newValue.trim() !== (user.displayName || ""));
            return newValue;
        });
    };

    const handleCurrentPasswordUpdate = (e) => {
        setCurrentPassword(e.target.value);
    };

    const handleNewPasswordUpdate = (e) => {
        setNewPassword(() => {
            const newValue = e.target.value;
            setPasswordChanged(newValue.length > 0);
            return newValue;
        });
    };

    const handleUpdateData = async () => {
        try {
            setDataIsUpdating(true);
            if (emailChanged) {
                if (currentPassword.trim().length === 0) {
                    throw "auth/missing-password";
                }
                await reauthenticateUser(currentPassword);
                await updateEmail(auth.currentUser, email);
            }
            if (displayNameChanged) {
                await updateProfile(auth.currentUser, {
                    displayName: displayName,
                });
            }
            if (passwordChanged) {
                await reauthenticateUser(currentPassword);
                await updatePassword(auth.currentUser, newPassword);
            }
            await auth.currentUser.reload();
            forceCurrentUserUpdate();
            setDataIsUpdating(false);
            resetForm();
            showMessage("Data updated", "success");
        } catch (e) {
            console.log(e);
            showMessage(getFirebaseErrorMessage(e), "error");
            setDataIsUpdating(false);
        }
    };

    useEffect(() => {
        if (user) {
            setEmail(user.email ?? "");
            setDisplayName(user.displayName ?? "");
        }
    }, [user]);

    return (
        <div className="w-[300px] m-auto pt-10">
            <form className="flex flex-col gap-2" autoComplete="off">
                <LabelledInput
                    title="Email: "
                    id="email"
                    value={email}
                    onChange={(e) => {
                        handleEmailUpdate(e);
                    }}
                />
                <LabelledInput
                    title="Name: "
                    id="displayName"
                    value={displayName}
                    onChange={(e) => {
                        handleDisplayNameUpdate(e);
                    }}
                    placeholder="Enter your name"
                />
                <LabelledInput
                    title="Current password: "
                    id="currentPassword"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => {
                        handleCurrentPasswordUpdate(e);
                    }}
                    placeholder="Enter your current password"
                />
                <LabelledInput
                    title="New password: "
                    id="newPassword"
                    type="password"
                    value={newPassword}
                    onChange={(e) => {
                        handleNewPasswordUpdate(e);
                    }}
                    placeholder="Enter your new password"
                />
                <TransparentButton
                    type="button"
                    handleClick={handleUpdateData}
                    disabled={
                        !(passwordChanged || emailChanged || displayNameChanged)
                    }
                    className="mt-2"
                >
                    {dataIsUpdating ? (
                        <CircularProgress color="inherit" size="18px" />
                    ) : (
                        "Save changes"
                    )}
                </TransparentButton>
            </form>
        </div>
    );
};
