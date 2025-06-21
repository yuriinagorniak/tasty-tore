import { RecipeSearch, RecipeGallery, RecipeFilter } from "../components/Recipes";

export const Recipes = () => {
    return (
        <main>
            <RecipeSearch />
            <section className="container px-[10px] flex items-center lg:items-start flex-col lg:flex-row gap-16 lg:gap-5 pt-[60px] pb-[90px]">
                <RecipeFilter />
                <RecipeGallery />
            </section>
        </main>
    );
};