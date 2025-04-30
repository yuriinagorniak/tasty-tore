import { RecipeSearch, RecipeGallery, RecipeFilter } from "../components/Recipes";
import { RecipeContextProvider } from "../contexts/RecipeContextProvider/RecipeContextProvider";

export const Recipes = () => {
    return (
        <main>
            <RecipeSearch />
            <section className="container flex gap-16 pt-[60px] pb-[90px]">
                <RecipeFilter />
                <RecipeGallery />
            </section>
        </main>
    );
};