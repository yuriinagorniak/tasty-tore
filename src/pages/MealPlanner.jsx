import { useContext } from "react";
import { SeparatorLine, PageBanner } from "../shared";
import { MealPlannerContext, RecipeContext, SavedRecipesContext } from "../contexts";
import { MealPlannerRecipeCard } from "../components";
import { daysOfWeek, mealTypes } from "../constants/mealPlannerConstants";

export const MealPlanner = () => {
    const { planner } = useContext(MealPlannerContext);

    return (
        <div>
            <PageBanner pageTitle="Simplify your meals, plan your week" />
            <div className="w-full px-10 py-5 flex flex-row justify-around items-center text-center gap-4 flex-wrap">
                {daysOfWeek.map((day) => (
                    <div className="flex flex-col gap-5 w-[13%] min-w-[250px] pt-5">
                        <h3 className="font-bold text-2xl capitalize">{day}</h3>
                        <div className="flex flex-col gap-3">
                            {mealTypes.map((type) => (
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
