export const TransparentButton = ({ handleClick = () => {}, children, filled = false }) => {
    return (
        <button
            className={`w-full border-2 py-3 rounded-xl ${
                filled
                    ? "bg-(--primary-text-color) text-(--additional-text-color)"
                    : "bg-(--additional-text-color) text-(--primary-text-color)"
            }`}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};
