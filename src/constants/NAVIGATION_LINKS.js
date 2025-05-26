import { ROUTES } from "./ROUTES";

export const NAVIGATION_LINKS = {
    general: [
        {
            path: ROUTES.RECIPES,
            content: "Recipes",
        },
    ],
    private: [
        {
            path: ROUTES.FAVOURITES,
            content: "Favourites",
        },
        {
            path: ROUTES.MEAL_PLANNER,
            content: "Meal Planner",
        },
        {
            path: ROUTES.SHOPPING_LIST,
            content: "Shopping List",
        },
        {
            path: ROUTES.DASHBOARD,
            content: "Dashboard",
        },
    ],
    auth: [
        {
            path: ROUTES.AUTH.LOGIN,
            content: "Log In",
        },
        {
            path: ROUTES.AUTH.SIGNUP,
            content: "Sign Up",
        },
    ],
};