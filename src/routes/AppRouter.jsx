import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router";
import {
    Dashboard,
    HomePage,
    Recipes,
    AppContainer,
    RecipePage,
    FavouriteRecipes,
    ShoppingList,
    MealPlanner,
    PageNotFound,
    Auth,
} from "../pages";
import { AuthContext } from "../contexts";
import { PrivateRoute } from "./PrivateRoute";
import { ROUTES } from "../constants/ROUTES";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<AppContainer />}>
                <Route index element={<HomePage />} />
                <Route path={ROUTES.RECIPES} element={<Recipes />} />

                <Route path={ROUTES.AUTH.BASE} element={<Auth />} />
                <Route path={ROUTES.AUTH.LOGIN} element={<Auth />} />
                <Route path={ROUTES.AUTH.SIGNUP} element={<Auth />} />
                <Route path={`${ROUTES.AUTH.BASE}/*`} element={<PageNotFound />} />

                <Route element={<PrivateRoute />}>
                    <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                    <Route path={ROUTES.FAVOURITES} element={<FavouriteRecipes />} />
                    <Route path={ROUTES.MEAL_PLANNER} element={<MealPlanner />} />
                    <Route path={ROUTES.SHOPPING_LIST} element={<ShoppingList />} />
                </Route>

                <Route path={ROUTES.RECIPE_PAGE} element={<RecipePage />} />

                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    );
};
