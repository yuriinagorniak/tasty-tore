import {
    ShoppingListContextProvider,
    MealPlannerContextProvider,
    RecipeContextProvider,
    SavedRecipesContextProvider,
    SnackbarContextProvider,
} from "../contexts";

export const AppProviders = ({ children }) => {
    return (
        <SnackbarContextProvider>
                <RecipeContextProvider>
                    <SavedRecipesContextProvider>
                        <ShoppingListContextProvider>
                            <MealPlannerContextProvider>{children}</MealPlannerContextProvider>
                        </ShoppingListContextProvider>
                    </SavedRecipesContextProvider>
                </RecipeContextProvider>
        </SnackbarContextProvider>
    );
};
