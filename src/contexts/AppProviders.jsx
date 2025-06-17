import {
    ShoppingListContextProvider,
    MealPlannerContextProvider,
    RecipeContextProvider,
    SavedRecipesContextProvider,
    SnackbarContextProvider,
    InventoryContextProvider,
} from "../contexts";

export const AppProviders = ({ children }) => {
    return (
        <SnackbarContextProvider>
            <InventoryContextProvider>
                <RecipeContextProvider>
                    <SavedRecipesContextProvider>
                        <ShoppingListContextProvider>
                            <MealPlannerContextProvider>{children}</MealPlannerContextProvider>
                        </ShoppingListContextProvider>
                    </SavedRecipesContextProvider>
                </RecipeContextProvider>
            </InventoryContextProvider>
        </SnackbarContextProvider>
    );
};
