import { Routes, Route, Navigate } from "react-router";
import { Dashboard, HomePage, Recipes, AppContainer } from "../pages";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<AppContainer />}>
                <Route index element={<HomePage />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/favourites" element={<Dashboard />} />
                <Route path="/meal-planner" element={<Dashboard />} />
            </Route>
        </Routes>
    );
};
