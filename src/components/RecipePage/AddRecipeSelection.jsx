import { useContext, useRef } from "react";

import { MealPlannerContext } from "../../contexts";
import { useSnackbar } from "../../hooks/useSnackbar";

import { daysOfWeek, mealTypes } from "../../constants/mealPlannerConstants";

export const AddRecipeSelection = ({ recipe = null, handleCloseModal = () => {} }) => {
    const { addRecipe } = useContext(MealPlannerContext);
    const showMessage = useSnackbar();

    const dayOfWeek = useRef(null);
    const mealType = useRef(null);

    function handleAddRecipe() {
        addRecipe(dayOfWeek.current.value, mealType.current.value, recipe);
        handleCloseModal();
        showMessage(`The recipe added to the meal plan (${dayOfWeek.current.value} ${mealType.current.value})`, "success");
    }

    return (
        <div className="py-8 px-10 bg-[#373737] rounded-xl">
            <p className="text-center text-2xl mb-5">Select when you want to cook this:</p>
            <div className="flex gap-10">
                <div className="flex">
                    <label className="font-bold" htmlFor="daysOfWeek">
                        Select a day:
                    </label>
                    <select
                        name="daysOfWeek"
                        id="daysOfWeek"
                        ref={dayOfWeek}
                        className="bg-[#373737] rounded capitalize"
                    >
                        {daysOfWeek.map((day) => (
                            <option value={day} key={day} className="capitalize">
                                {day}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="font-bold" htmlFor="mealTypes">
                        Select a meal:
                    </label>
                    <select
                        name="mealTypes"
                        id="mealTypes"
                        ref={mealType}
                        className="bg-[#373737] rounded capitalize"
                    >
                        {mealTypes.map((type) => (
                            <option value={type} key={type} className="capitalize">{type}</option>
                        ))}
                    </select>
                </div>
                <button type="button" onClick={handleAddRecipe}>Add</button>
            </div>
        </div>
    );
};
