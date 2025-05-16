export const firebaseErrorMessages = {
  "auth/email-already-in-use": "This email is already in use.",
  "auth/invalid-email": "The email address is invalid.",
  "auth/user-not-found": "No account found with this email.",
  "auth/wrong-password": "Incorrect password. Please try again.",
  "auth/weak-password": "Password should be at least 6 characters.",
  "auth/missing-password": "Please enter your password.",
  "auth/too-many-requests": "Too many login attempts. Try again later.",
};

export const getFirebaseErrorMessage = (code) =>
  firebaseErrorMessages[code] || "An unexpected error occurred. Please try again.";