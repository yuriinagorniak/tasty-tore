import { NavLink } from "react-router";
import { Header, HeroSection, RecipeCategories, FeaturedRecipe } from "../../components";

export const HomePage = () => {
    return (
        <main>
            <HeroSection />
            <RecipeCategories />
            <FeaturedRecipe />
            {/* <div>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </div> */}
        </main>
    );
};
