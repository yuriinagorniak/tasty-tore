import { NavLink, useNavigate } from "react-router";
import { Header, HeroSection, RecipeCategories, FeaturedRecipe, LoginSection } from "../components";
import { TransparentButton } from "../shared";
import { ROUTES } from "../constants/ROUTES";

export const HomePage = () => {
    return (
        <main>
            <HeroSection />
            <RecipeCategories />
            <LoginSection />
            <FeaturedRecipe />
        </main>
    );
};
