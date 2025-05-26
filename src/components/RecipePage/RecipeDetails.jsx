import { useEffect, useContext, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useLocation } from "react-router";
import { useSnackbar } from "../../hooks";
import { SavedRecipesContext, RecipeContext } from "../../contexts";
import { TransparentButton } from "../../shared";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import "react-lazy-load-image-component/src/effects/blur.css";

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
        showMessage(
            currentRecipeSaved ? "The recipe removed from the favourites" : "The recipe saved!",
            "success"
        );
    };

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
                <LazyLoadImage
                    alt={recipe.label}
                    className="w-full h-full overflow-hidden object-cover"
                    effect="blur"
                    height="100%"
                    src={recipe.images?.LARGE?.url || recipe.images?.REGULAR?.url || recipe.image}
                    width="100%"
                    onLoad={() => {
                        setImageLoaded(true);
                    }}
                />
            </div>
            <div className="w-[30%] flex flex-col justify-between">
                <p className="font-bold text-5xl">{recipe.label}</p>
                <div>
                    <p>
                        <span className="font-bold">Source:</span> {recipe.source}
                    </p>
                    <p>
                        <span className="font-bold">Cooking time:</span> {recipe.totalTime === 0 ? "-" : recipe.totalTime}
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
                            <TransparentButton
                                handleClick={() =>
                                    showMessage("The recipe will be opened in the new tab")
                                }
                            >
                                Open recipe
                            </TransparentButton>
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
