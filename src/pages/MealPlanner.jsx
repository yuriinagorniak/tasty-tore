import { useContext } from "react";
import { SeparatorLine, PageBanner } from "../shared";
import { MealPlannerContext, RecipeContext, SavedRecipesContext } from "../contexts";
import { RecipeCard } from "../components";
import { daysOfWeek, mealTypes } from "../constants/mealPlannerConstants";

export const MealPlanner = () => {
    const { planner } = useContext(MealPlannerContext);

    return (
        <div>
            <PageBanner pageTitle="Simplify your meals, plan your week" />
            <div className="flex flex-col gap-10">
                {daysOfWeek.map((day) => (
                    <div key={day} className="flex flex-col items-center gap-4">
                        <h2 className="text-2xl capitalize">{day}</h2>

                        <div className="flex w-[80%] h-44 gap-4 justify-center">
                            {mealTypes.map((type) => (
                                <div key={type} className="flex flex-col gap-2 w-1/3 items-center">
                                    <h3 className="text-lg capitalize">{type}</h3>

                                    {planner[day][type] ? (
                                        <RecipeCard data={planner[day][type]} />
                                    ) : (
                                        <span className="text-gray-400">No recipe</span>
                                    )}
                                </div>
                            ))}
                        </div>

                        <SeparatorLine />
                    </div>
                ))}
            </div>
        </div>
    );
};
