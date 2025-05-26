import { useState, useEffect } from "react";
import { DAYS_OF_WEEK, MEAL_TYPES } from "../../constants/MEAL_PLANNER_CONSTANTS";
import { MealPlannerContext } from "./MealPlannerContext";
import { useFirestore, useLocalStorage } from "../../hooks";

const initialPlanner = DAYS_OF_WEEK.reduce((daysAcc, day) => {
    daysAcc[day] = MEAL_TYPES.reduce((mealsAcc, type) => {
        return { ...mealsAcc, [type]: null };
    }, {});

    return daysAcc;
}, {});

export const MealPlannerContextProvider = ({ children }) => {
    const [planner, setPlanner] = useFirestore("mealPlanner", initialPlanner);

    function addRecipe(day, mealType, recipe) {
        setPlanner((prev) => ({ ...prev, [day]: { ...prev[day], [mealType]: recipe } }));
    }

    const ctxValue = { planner, addRecipe };

    return <MealPlannerContext.Provider value={ctxValue}>{children}</MealPlannerContext.Provider>;
};
