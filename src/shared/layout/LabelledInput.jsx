import { Input } from "./Input";
import { cn } from "../../utils";

export const LabelledInput = ({
    title = "",
    labelClassName = "",
    wrapperClassName = "",
    ...props
}) => {
    return (
        <div className={cn(wrapperClassName, "relative w-full flex flex-col")}>
            <label className={cn(labelClassName, "max-md:sm:w-[80px] sm:absolute sm:top-[50%] sm:translate-y-[-50%] sm:left-[-10px] sm:translate-x-[-100%]")} htmlFor={props.id ?? ""}>
                {title}
            </label>
            <Input {...props} />
        </div>
    );
};
