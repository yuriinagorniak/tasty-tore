import { SavedRecipesContext } from "./SavedRecipesContext";
import { useFirestore } from "../../hooks";

export const SavedRecipesContextProvider = ({ children }) => {
    const [savedRecipes, setSavedRecipes] = useFirestore("savedRecipes", []);

    const saveRecipe = (recipe) => {
        if (recipe) {
            if (savedRecipes.some((recipeData) => recipeData.recipe.uri === recipe.recipe.uri)) {
                setSavedRecipes((prev) =>
                    prev.filter((recipeData) => recipeData.recipe.uri !== recipe.recipe.uri)
                );
            } else {
                setSavedRecipes((prev) => [...prev, recipe]);
            }
        }
    };

    const ctxValue = { savedRecipes, saveRecipe };
    return <SavedRecipesContext.Provider value={ctxValue}>{children}</SavedRecipesContext.Provider>;
};
