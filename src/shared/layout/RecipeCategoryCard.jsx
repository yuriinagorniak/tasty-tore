import MarbleBg from "../../assets/HomePage/marble.webp";

export const RecipeCategoryCard = ({ icon, title, bgColor, onClick = () => {} }) => {
    console.log(bgColor);

    return (
        <div
            onClick={onClick}
            style={{
                backgroundImage: `url(${MarbleBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className={`flex flex-col rounded-md w-full h-[395px] border relative`}
        >
            <div className="absolute w-full h-full top-0 left-0 z-1 opacity-80 rounded-md" style={{ backgroundColor: bgColor }} />

            <div className="w-full h-full z-2 flex flex-col items-center justify-center">
                <div className="w-[270px] h-[270px]">{icon}</div>
                <p className="font-bold text-[36px] text-black">{title}</p>
            </div>
        </div>
    );
};
