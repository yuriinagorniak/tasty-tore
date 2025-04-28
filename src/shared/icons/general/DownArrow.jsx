export const DownArrow = ({ rotated = false }) => {
    return (
        <svg
            className={`w-6 h-6 ${rotated ? "rotate-180" : "rotate-0"}`}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="512.000000pt"
            height="512.000000pt"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
        >
            <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#e0cfa4"
                stroke="none"
            >
                <path
                    d="M1046 3497 c-52 -30 -77 -65 -83 -120 -4 -35 -1 -54 15 -81 17 -29
       1127 -1314 1355 -1569 89 -99 129 -121 222 -122 131 0 84 -47 866 853 386 443
       711 820 722 839 15 26 18 45 14 80 -6 55 -31 90 -83 120 l-39 23 -1475 0
       -1475 0 -39 -23z"
                />
            </g>
        </svg>
    );
};
