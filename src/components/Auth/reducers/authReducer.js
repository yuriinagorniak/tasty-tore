export const getAuthInitialValue = (authOption) => ({
    isRegistering: authOption === "signup",
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    loading: false,
    error: null,
});

export const authActionTypes = {
    SET_IS_REGISTERING: "SET_IS_REGISTERING",
    SET_DISPLAY_NAME: "SET_DISPLAY_NAME",
    SET_EMAIL: "SET_EMAIL",
    SET_PASSWORD: "SET_PASSWORD",
    SET_PASSWORD_CONFIRM: "SET_PASSWORD_CONFIRM",
    SET_LOADING: "SET_LOADING",
    RESET_FORM: "RESET_FORM",
};

export const authReducer = (state, action) => {
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