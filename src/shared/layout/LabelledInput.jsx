import { Input } from "./Input";

export const LabelledInput = ({
    title = "",
    labelClassName = "absolute top-[50%] translate-y-[-50%] left-[-10px] translate-x-[-100%]",
    wrapperClassName = "relative w-full",
    ...rest
}) => {
    return (
        <div className={wrapperClassName}>
            <label className={labelClassName} htmlFor={rest.id ?? ""}>
                {title}
            </label>
            <Input {...rest} />
        </div>
    );
};
