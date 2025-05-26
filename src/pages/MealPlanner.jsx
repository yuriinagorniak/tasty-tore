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
            <div className="w-full px-10 py-5 flex flex-row justify-around items-center text-center gap-4 flex-wrap">
                {DAYS_OF_WEEK.map((day) => (
                    <div className="flex flex-col gap-5 w-[13%] min-w-[250px] pt-5">
                        <h3 className="font-bold text-2xl capitalize">{day}</h3>
                        <div className="flex flex-col gap-3">
                            {MEAL_TYPES.map((type) => (
                                <div className="w-full h-36">
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
