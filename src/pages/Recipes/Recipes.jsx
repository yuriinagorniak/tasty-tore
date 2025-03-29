import { RecipeSearch, RecipeGallery } from "../../components/Recipes";
import { RecipeContextProvider } from "../../contexts/RecipeContextProvider/RecipeContextProvider";

export const Recipes = () => {
    return (
        <main>
            <RecipeContextProvider>
                <RecipeSearch />
                <RecipeGallery />
            </RecipeContextProvider>
        </main>
    );
};
