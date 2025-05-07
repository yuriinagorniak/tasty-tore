import { useState, useEffect } from "react";
import { daysOfWeek, mealTypes } from "../../constants/mealPlannerConstants";
import { MealPlannerContext } from "./MealPlannerContext";
import { useLocalStorage } from "../../hooks";

const initialPlanner = daysOfWeek.reduce((daysAcc, day) => {
    daysAcc[day] = mealTypes.reduce((mealsAcc, type) => {
        return { ...mealsAcc, [type]: null };
    }, {});

    return daysAcc;
}, {});

export const MealPlannerContextProvider = ({ children }) => {
    const { getFromStorage, setToStorage } = useLocalStorage("mealPlanner", initialPlanner); 
    const initialValue = getFromStorage();
    const [planner, setPlanner] = useState(initialValue);

    function addRecipe(day, mealType, recipe) {
        setPlanner((prev) => ({ ...prev, [day]: { ...prev[day], [mealType]: recipe } }));
    }

    const ctxValue = { planner, addRecipe };
    console.log(planner);

    useEffect(() => {
        setToStorage(planner);
    }, [planner]);

    return <MealPlannerContext.Provider value={ctxValue}>{children}</MealPlannerContext.Provider>;
};
