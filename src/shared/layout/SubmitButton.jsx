import CircularProgress from "@mui/material/CircularProgress";

export const SubmitButton = ({ onClick = () => {}, loading = false }) => {
    return (
        <button
            type="submit"
            disabled={loading}
            onClick={onClick}
            className="w-full h-13 flex items-center justify-center border-2 rounded-sm border-[var(--primary-text-color)] hover:bg-[var(--primary-text-color)] font-bold hover:text-black"
        >
            {loading ? <CircularProgress color="inherit" size="25px" /> : "Log In"}
        </button>
    );
};
