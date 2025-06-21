import { cn } from "../../utils";

export const TransparentButton = ({
    className = "",
    handleClick = () => {},
    children,
    filled = false,
}) => {
    return (
        <button
            className={cn(
                `w-full border-2 py-3 rounded-xl ${
                    filled
                        ? "bg-(--primary-text-color) text-(--additional-text-color)"
                        : "bg-(--additional-text-color) text-(--primary-text-color)"
                }`,
                className
            )}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};
