import DefaultBg from "../../assets/defaultBg.jpg";

export const PageBanner = ({ children = "", pageTitle = "Tasty tore", bg = DefaultBg }) => {
    return (
        <section
            className="tint-bg bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="container flex flex-col items-center pt-36 pb-40 text-center text-(--secondary-text-color) font-bold">
                <h3 className="text-4xl">{pageTitle}</h3>
                {children}
            </div>
        </section>
    );
};
