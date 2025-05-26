import { MainLogo, PageBanner } from "../../shared";
import HeroSectionBg from "../../assets/HomePage/hero-section-bg.jpg";

export const HeroSection = () => {
    return (
        <PageBanner bg={HeroSectionBg}>
            <div className="flex items-center gap-10">
                <MainLogo width={140} height={140} />
                <div className="font-bold pt-4 flex flex-col gap-1">
                    <h2 className="text-5xl">TASTY TORE</h2>
                    <p className="text-3xl">Taste the treasure!</p>
                </div>
            </div>
        </PageBanner>
    );
};
