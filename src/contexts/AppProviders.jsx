import {
    ShoppingListContextProvider,
    MealPlannerContextProvider,
    RecipeContextProvider,
    SavedRecipesContextProvider,
} from "../contexts";

export const AppProviders = ({ children }) => {
    return (
        <RecipeContextProvider>
            <SavedRecipesContextProvider>
                <ShoppingListContextProvider>
                    <MealPlannerContextProvider>{children}</MealPlannerContextProvider>
                </ShoppingListContextProvider>
            </SavedRecipesContextProvider>
        </RecipeContextProvider>
    );
};
