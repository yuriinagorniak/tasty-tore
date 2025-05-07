import { useState, useEffect } from "react";
import { SavedRecipesContext } from "./SavedRecipesContext";
import { useLocalStorage } from "../../hooks";

export const SavedRecipesContextProvider = ({ children }) => {
    const { getFromStorage, setToStorage } = useLocalStorage('savedRecipes');
    const initialValue = getFromStorage();
    const [savedRecipes, setSavedRecipes] = useState(initialValue);

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

    useEffect(() => {
        setToStorage(savedRecipes);
    }, [savedRecipes]);

    const ctxValue = { savedRecipes, saveRecipe };
    return <SavedRecipesContext.Provider value={ctxValue}>{children}</SavedRecipesContext.Provider>;
};
