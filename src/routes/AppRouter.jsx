import { Routes, Route, Navigate } from "react-router";
import { Dashboard, HomePage, Recipes, AppContainer, RecipePage, FavouriteRecipes, ShoppingList, MealPlanner, PageNotFound } from "../pages";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<AppContainer />}>
                <Route index element={<HomePage />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/favourites" element={<FavouriteRecipes />} />
                <Route path="/meal-planner" element={<MealPlanner />} />
                <Route path="/shopping-list" element={<ShoppingList />} />

                <Route path="/recipe" element={<RecipePage />} />

                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    );
};