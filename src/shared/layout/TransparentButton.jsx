import { cn } from "../../utils";

export const TransparentButton = ({
    className = "",
    handleClick = () => {},
    children,
    filled = false,
    disabled = false,
    ...props
}) => {
    return (
        <button
            className={cn(
                `w-full border-2 py-3 rounded-xl ${
                    filled
                        ? "bg-(--primary-text-color) text-(--additional-text-color)"
                        : "bg-(--additional-text-color) text-(--primary-text-color)"
                }`,
                className,
                disabled && "border-[#5d5d5d] text-[#5d5d5d]",
            )}
            onClick={handleClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};
