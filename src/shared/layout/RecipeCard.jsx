import { useContext } from "react";
import { useNavigate } from "react-router";
import { RecipeContext } from "../../contexts/RecipeContextProvider/RecipeContext";
import { SavedRecipesContext } from "../../contexts/SavedRecipesContextProvider/SavedRecipesContext";

import { BookmarkIcon } from "../icons";

export const RecipeCard = ({ data }) => {
    const navigate = useNavigate();
    const { setSelectedRecipe } = useContext(RecipeContext);
    const { savedRecipes, saveRecipe } = useContext(SavedRecipesContext);

    const handleOpenRecipe = (recipeHref) => {
        setSelectedRecipe(recipeHref);
        navigate(`/recipe`);
        window.scrollTo({ top: 0 });
    };

    return (
        <>
            {data?.recipe && (
                <div
                    className="w-full h-full border-2 rounded-md bg-no-repeat bg-cover bg-center overflow-hidden cursor-pointer"
                    style={{ backgroundImage: `url(${data.recipe.image})` }}
                    onClick={() => handleOpenRecipe(data)}
                >
                    <div className="bg-[rgba(0,0,0,0.8)] w-full h-full flex flex-col justify-end">
                        <div className="flex items-center justify-between p-3">
                            <p
                                className="font-bold text-xl w-2/3 truncate"
                                title={data.recipe.label}
                            >
                                {data.recipe.label}
                            </p>
                            <div
                                className="w-[40px] h-[40px]"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    saveRecipe(data);
                                }}
                            >
                                <BookmarkIcon filled={savedRecipes.some((recipeData) => recipeData.recipe.uri === data.recipe.uri)} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};