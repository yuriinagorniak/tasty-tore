import { useEffect, useContext, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useLocation } from "react-router";
import { useSnackbar } from "../../hooks";
import { SavedRecipesContext, RecipeContext } from "../../contexts";
import { TransparentButton } from "../../shared";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import "react-lazy-load-image-component/src/effects/blur.css";

export const RecipeDetails = ({ userLogged = false, handleOpenModal }) => {
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
        <section className="flex flex-col max-sm:items-center sm:flex-row justify-center px-1 lg:px-10 pt-2 gap-5 lg:gap-20 2xl:gap-25">
            <div className="border-4 max-w-[400px] w-full aspect-[1/1] lg:w-[50%] 2xl:w-[400px] 2xl:h-[400px] rounded-xl overflow-hidden">
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
            <div className="w-full lg:w-[40%] 2xl:w-[30%] flex flex-col justify-between  text-center gap-2">
                <div className="lg:flex-1 lg:flex lg:justify-center lg:items-center">
                    <p className="font-bold text-5xl">{recipe.label}</p>
                </div>
                <div className="lg:flex-1 lg:flex lg:flex-col lg:justify-end">
                    <div className="flex py-5 [&>*]:flex-1 [&>*]:flex [&>*]:flex-col">
                        <p>
                            <span className="font-bold">Source:</span> {recipe.source}
                        </p>
                        {recipe.totalTime !== 0 && (
                            <p>
                                <span className="font-bold">Cooking time:</span> {recipe.totalTime}
                            </p>
                        )}
                        <p>
                            <span className="font-bold">Calories:</span>{" "}
                            {Math.round(recipe.calories)}
                        </p>
                    </div>
                    {userLogged && (
                        <TransparentButton handleClick={() => handleOpenModal()}>
                            Add to meal plan
                        </TransparentButton>
                    )}
                    <div className="pt-2 flex justify-between gap-2">
                        <a
                            href={recipe.url}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="flex-2"
                        >
                            <TransparentButton
                                handleClick={() =>
                                    showMessage("The recipe will be opened in the new tab")
                                }
                            >
                                Open recipe
                            </TransparentButton>
                        </a>
                        {userLogged && (
                            <div className="flex-1">
                                <TransparentButton
                                    handleClick={handleSaveRecipe}
                                    filled={currentRecipeSaved}
                                >
                                    {currentRecipeSaved ? "Saved" : "Save"}
                                </TransparentButton>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
