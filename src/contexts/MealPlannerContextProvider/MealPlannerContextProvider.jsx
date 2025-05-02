import { useState } from "react";

import { MealPlannerContext } from "./MealPlannerContext";
import { daysOfWeek, mealTypes } from "../../shared";

const initialPlanner = daysOfWeek.reduce((daysAcc, day) => {
    daysAcc[day] = mealTypes.reduce((mealsAcc, type) => {
        return { ...mealsAcc, [type]: null };
    }, {});

    return daysAcc;
}, {});

export const MealPlannerContextProvider = ({ children }) => {
    const [planner, setPlanner] = useState(initialPlanner);

    function addRecipe(day, mealType, recipe) {
        setPlanner((prev) => ({ ...prev, [day]: { ...prev[day], [mealType]: recipe } }));
    }

    const ctxValue = { planner, addRecipe };
    console.log(planner);

    return <MealPlannerContext.Provider value={ctxValue}>{children}</MealPlannerContext.Provider>;
};
