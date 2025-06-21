import { cn } from "../../utils";

export const SeparatorLine = ({ width = "80%", color = "#e0cfa4", className = ""}) => {
    return <hr className={cn(`w-[${width}] h-0.5 text-[${color}] m-auto`, className)} />;
};
