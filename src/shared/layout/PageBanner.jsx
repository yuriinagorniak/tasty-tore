import DefaultBg from "../../assets/defaultBg-1.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const PageBanner = ({ children = "", pageTitle = null, bg = DefaultBg }) => {
    return (
        <section className="bg-cover bg-no-repeat bg-center relative">
            <div className="absolute top-0 left-0 w-full h-full z-0 tint-bg overflow-hidden">
                <LazyLoadImage
                    alt={pageTitle}
                    className="w-full h-full overflow-hidden object-cover"
                    effect="blur"
                    height="100%"
                    src={bg} 
                    width="100%"
                />
            </div>
            <div className="relative z-3 container flex flex-col items-center pt-36 pb-40 text-center text-(--secondary-text-color) font-bold">
                {pageTitle && <h3 className="text-4xl">{pageTitle}</h3>}
                {children}
            </div>
        </section>
    );
};
