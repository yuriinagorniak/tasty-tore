import {
    ShoppingListContextProvider,
    MealPlannerContextProvider,
    RecipeContextProvider,
    SavedRecipesContextProvider,
    SnackbarContextProvider,
    AuthContextProvider,
} from "../contexts";

export const AppProviders = ({ children }) => {
    return (
        <SnackbarContextProvider>
            <AuthContextProvider>
                <RecipeContextProvider>
                    <SavedRecipesContextProvider>
                        <ShoppingListContextProvider>
                            <MealPlannerContextProvider>{children}</MealPlannerContextProvider>
                        </ShoppingListContextProvider>
                    </SavedRecipesContextProvider>
                </RecipeContextProvider>
            </AuthContextProvider>
        </SnackbarContextProvider>
    );
};
