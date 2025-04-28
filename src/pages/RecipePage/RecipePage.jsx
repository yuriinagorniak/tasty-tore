import { useEffect, useContext } from "react";
import { useNavigate } from "react-router";

import { RecipeContext, SavedRecipesContext, ShoppingListContext } from "../../contexts";
import { InfoTag, RecipeCard } from "../../shared/layout";

export const RecipePage = () => {
    const { selectedRecipe, recipes } = useContext(RecipeContext);
    const { savedRecipes, saveRecipe } = useContext(SavedRecipesContext);
    const { shoppingList, addRecipeIngredients } = useContext(ShoppingListContext);
    const navigate = useNavigate();
    const recipe = selectedRecipe.recipe;

    const currentRecipeSaved = savedRecipes.some(
        (recipeData) => recipeData.recipe.uri === recipe.uri
    );

    const suggestedRecipes = recipes.filter((r) => r.recipe.label !== recipe.label).slice(0, 3);

    useEffect(() => {
        if (!selectedRecipe) {
            navigate("/recipes");
        }
    }, [selectedRecipe, navigate]);

    if (!selectedRecipe) {
        return null;
    }

    return (
        <section>
            <div className="container bg-[#373737] pt-[60px] pb-[90px] px-3 rounded-md">
                <div className="flex px-16 justify-center gap-25">
                    <div className="border-4 w-[400px] h-[400px] rounded-xl overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src={
                                recipe.images?.LARGE?.url ||
                                recipe.images?.REGULAR?.url ||
                                recipe.image
                            }
                            alt={recipe.label}
                        />
                    </div>
                    <div className="w-[30%] flex flex-col justify-between">
                        <p className="font-bold text-5xl">{recipe.label}</p>
                        <div>
                            <p>
                                <span className="font-bold">Source:</span> {recipe.source}
                            </p>
                            <p>
                                <span className="font-bold">Cooking time:</span> {recipe.totalTime}
                            </p>
                            <p>
                                <span className="font-bold">Calories:</span>{" "}
                                {Math.round(recipe.calories)}
                            </p>
                            <button className="border-2 w-full py-3 rounded-xl">
                                Add to meal plan
                            </button>
                            <div className="pt-2 flex justify-between">
                                <a
                                    href={recipe.url}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="w-[70%]"
                                >
                                    <button className="w-full border-2 py-3 rounded-xl">
                                        Open recipe
                                    </button>
                                </a>
                                <button
                                    className={`w-[28%] border-2 py-3 rounded-xl ${
                                        currentRecipeSaved
                                            ? "bg-(--primary-text-color) text-(--additional-text-color)"
                                            : "bg-(--additional-text-color) text-(--primary-text-color)"
                                    }`}
                                    onClick={() => saveRecipe(selectedRecipe)}
                                >
                                    {currentRecipeSaved ? "Saved" : "Save"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center my-20">
                    <hr className="w-[80%] h-0.5" />

                    <div className="w-full flex flex-col justify-center items-center my-10 gap-4">
                        <h4 className="text-2xl font-bold">Health</h4>
                        <ul className="flex w-[70%] flex-wrap justify-center items-center gap-1">
                            {recipe.healthLabels.map((title) => (
                                <li>
                                    <InfoTag label={title} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <hr className="w-[80%] h-0.5" />

                    <div className="w-full flex flex-col justify-center items-center my-10 gap-4">
                        <h4 className="text-2xl font-bold">Diet</h4>
                        <ul className="flex w-[70%] flex-wrap justify-center items-center gap-1">
                            {recipe.dietLabels.map((title) => (
                                <li>
                                    <InfoTag label={title} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <hr className="w-[80%] h-0.5" />

                    <div className="w-[70%] flex flex-row justify-between my-10 gap-4">
                        <div className="w-[50%]">
                            <h4 className="text-2xl font-bold">Ingredients:</h4>
                            <ul className="w-full flex flex-col flex-wrap gap-2 pt-5 pl-3">
                                {recipe.ingredientLines.map((title) => (
                                    <li>- {title}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-[40%] flex flex-col items-center">
                            <button
                                className="border-2 py-3 px-4 rounded-xl"
                                onClick={() => {
                                    // console.log("----recipe page ing-----");
                                    // console.log(recipe.ingredients);
                                    addRecipeIngredients(recipe.ingredients);
                                }}
                            >
                                Add to shopping list
                            </button>
                        </div>
                    </div>

                    <div className="mt-20 flex flex-col items-center gap-4">
                        <h4 className="text-2xl font-bold">You might also like:</h4>
                        <div className="h-[200px] flex flex-wrap items-center justify-center gap-10">
                            {suggestedRecipes.map((recipe) => (
                                <div className="w-[325px] h-[165px]" key={recipe.recipe.uri}>
                                    <RecipeCard data={recipe} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};