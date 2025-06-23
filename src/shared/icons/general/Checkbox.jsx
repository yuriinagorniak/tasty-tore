export const Checkbox = ({width = "32px", height = "32px", fillColor = "#e0cfa4", className, ...props}) => {
    return (
        <svg
            className={className}
            fill={fillColor}
            width={width}
            height={height}
            viewBox="0 0 32 32"
            id="icon"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM14,21.5,9,16.5427,10.5908,15,14,18.3456,21.4087,11l1.5918,1.5772Z"
                transform="translate(0 0)"
            />
            <path
                id="inner-path"
                fill="none"
                d="M14,21.5,9,16.5427,10.5908,15,14,18.3456,21.4087,11l1.5918,1.5772Z"
                transform="translate(0 0)"
            />
            <rect
                fill="none"
                width="32"
                height="32"
            />
        </svg>
    );
};
