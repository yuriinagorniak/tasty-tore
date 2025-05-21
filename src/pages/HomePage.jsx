import { NavLink, useNavigate } from "react-router";
import { Header, HeroSection, RecipeCategories, FeaturedRecipe } from "../components";
import { TransparentButton } from "../shared";
import { ROUTES } from "../constants/routes";

export const HomePage = () => {
    const navigate = useNavigate();

    return (
        <main>
            <HeroSection />
            <RecipeCategories />
            <section>
                <div className="container py-20 text-center flex items-center">
                    <p className="flex-2">
                        Log in to your account to save the recipes, create the shopping list and
                        plan the week
                    </p>
                    <div className="flex-1 p-5 flex flex-col items-center justify-center gap-4">
                        <TransparentButton handleClick={() => navigate(ROUTES.AUTH.LOGIN)}>Log in</TransparentButton>
                        <TransparentButton handleClick={() => navigate(ROUTES.AUTH.SIGNUP)} filled>Register</TransparentButton>
                    </div>
                </div>
            </section>
            <FeaturedRecipe />
        </main>
    );
};
