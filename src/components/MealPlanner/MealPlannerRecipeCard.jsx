import { useContext } from "react";
import { useNavigate } from "react-router";
import { BookmarkIcon, PlusSign } from "../../shared";
import { RecipeContext, SavedRecipesContext } from "../../contexts";
import { ROUTES } from "../../constants/ROUTES";
import FavouriteRecipesBg from "../../assets/FavouriteRecipes/bg.jpg";

export const MealPlannerRecipeCard = ({ data }) => {
    const navigate = useNavigate();
    const { setSelectedRecipe } = useContext(RecipeContext);


    const handleOpenRecipe = (recipeHref) => {
        setSelectedRecipe(recipeHref);
        navigate(ROUTES.RECIPE_PAGE);
        window.scrollTo({ top: 0 });
    };

    const handleAddRecipe = () => {
        navigate(ROUTES.RECIPES);
    };

    return (
        <>
            {data?.recipe ? (
                <div
                    className="w-full h-full border-2 rounded-md bg-no-repeat bg-cover bg-center overflow-hidden cursor-pointer"
                    style={{ backgroundImage: `url(${data.recipe.images.REGULAR.url ?? FavouriteRecipesBg})` }}
                    onClick={() => handleOpenRecipe(data)}
                >
                    <div className="bg-[rgba(0,0,0,0.8)] w-full h-full flex flex-col items-center justify-center">
                        <p className="font-bold text-xl p-3" title={data.recipe.label}>
                            {data.recipe.label}
                        </p>
                    </div>
                </div>
            ) : (
                <div
                    className="w-full h-full border-2 rounded-md bg-no-repeat bg-cover bg-center overflow-hidden cursor-pointer flex items-center justify-center"
                    onClick={handleAddRecipe}
                >
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-[80px] h-[80px]">
                            <PlusSign />
                        </div>
                        <p>Add Recipe</p>
                    </div>
                </div>
            )}
        </>
    );
};

