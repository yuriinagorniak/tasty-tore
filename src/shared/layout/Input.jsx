import { cn } from "../../utils";

export const Input = ({
    value,
    onChange = () => {},
    type = "text",
    placeholder = "",
    id = "",
    required = false,
    className = ""
    
}) => {

    return (
        <input
            placeholder={placeholder}
            id={id}
            name={id}
            required={required}
            value={value}
            onChange={onChange}
            type={type}
            className={cn("w-full pl-[14px] py-[11px] bg-[var(--additional-text-color)] rounded-sm", className)}
        />
    );
};
