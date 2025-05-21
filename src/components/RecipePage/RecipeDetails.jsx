import { useEffect, useContext, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useLocation } from "react-router";
import { useSnackbar } from "../../hooks";
import { SavedRecipesContext, RecipeContext } from "../../contexts";
import { TransparentButton } from "../../shared";

export const RecipeDetails = ({ handleOpenModal }) => {
    const showMessage = useSnackbar();
    const { selectedRecipe } = useContext(RecipeContext);
    const { savedRecipes, saveRecipe } = useContext(SavedRecipesContext);
    const [imageLoaded, setImageLoaded] = useState(false);
    const location = useLocation();
    const recipe = selectedRecipe.recipe;

    const currentRecipeSaved = savedRecipes.some(
        (recipeData) => recipeData.recipe.uri === recipe.uri
    );

    const handleSaveRecipe = () => {
        saveRecipe(selectedRecipe);
        showMessage(currentRecipeSaved ? "The recipe removed from the favourites" : "The recipe saved!", "success");
    }

    useEffect(() => {
        setImageLoaded(false);
    }, [location.pathname]);

    return (
        <section className="flex px-16 justify-center gap-25">
            <div className="border-4 w-[400px] h-[400px] rounded-xl overflow-hidden">
                {!imageLoaded && (
                    <div className="w-full h-full flex items-center justify-center">
                        <CircularProgress color="inherit" />
                    </div>
                )}
                <img
                    className={`w-full h-full object-cover ${
                        imageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => {
                        setImageLoaded(true);
                    }}
                    src={recipe.images?.LARGE?.url || recipe.images?.REGULAR?.url || recipe.image}
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
                        <span className="font-bold">Calories:</span> {Math.round(recipe.calories)}
                    </p>
                    <TransparentButton
                        // handleClick={() => addRecipe("monday", "breakfast", recipe)}
                        handleClick={() => handleOpenModal()}
                    >
                        Add to meal plan
                    </TransparentButton>
                    <div className="pt-2 flex justify-between">
                        <a
                            href={recipe.url}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="w-[70%]"
                        >
                            <TransparentButton handleClick={() => showMessage("The recipe will be opened in the new tab")}>Open recipe</TransparentButton>
                        </a>
                        <div className="w-[28%]">
                            <TransparentButton
                                handleClick={handleSaveRecipe}
                                filled={currentRecipeSaved}
                            >
                                {currentRecipeSaved ? "Saved" : "Save"}
                            </TransparentButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
