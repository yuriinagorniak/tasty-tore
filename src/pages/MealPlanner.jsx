import { useContext } from "react";
import { SeparatorLine, PageBanner } from "../shared";
import { MealPlannerContext, RecipeContext, SavedRecipesContext } from "../contexts";
import { MealPlannerRecipeCard } from "../components";
import { DAYS_OF_WEEK, MEAL_TYPES } from "../constants/MEAL_PLANNER_CONSTANTS";

export const MealPlanner = () => {
    const { planner } = useContext(MealPlannerContext);

    return (
        <div>
            <PageBanner pageTitle="Simplify your meals, plan your week" />
            {/* <div className="w-full px-10 py-5 flex flex-row justify-around items-center text-center gap-4 flex-wrap"> */}
            <div className="w-full px-10 md:px-3 lg:px-10 py-5 text-center gap-4 max-lg:grid max-lg:grid-cols-1 max-lg:sm:grid-cols-2 max-lg:md:grid-cols-3 max-lg:place-items-center 2xl:grid 2xl:grid-cols-7">
                {DAYS_OF_WEEK.map((day) => (
                    <div className="w-full min-w-[200px] max-w-[300px] lg:w-full m-auto max-2xl:lg:max-w-[1100px] 2xl:max-w-[2200px] flex flex-col items-center lg:flex-row 2xl:flex-col gap-5 pt-5 lg:pb-5">
                        <h3 className="flex-1 font-bold text-2xl capitalize">{day}</h3>
                        <div className="w-full flex-4 flex flex-col lg:flex-row 2xl:flex-col gap-3">
                            {MEAL_TYPES.map((type) => (
                                <div className="w-full h-36 max-2xl:lg:flex-1">
                                    <MealPlannerRecipeCard data={planner[day][type]} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
