import { useContext } from "react";
import { useNavigate } from "react-router";
import { useSnackbar } from "../hooks";
import { BookmarkIcon } from "../shared";
import { RecipeContext, SavedRecipesContext } from "../contexts";


export const RecipeCard = ({ data }) => {
    const navigate = useNavigate();
    const showMessage = useSnackbar();
    const { setSelectedRecipe } = useContext(RecipeContext);
    const { savedRecipes, saveRecipe } = useContext(SavedRecipesContext);
    const recipeSaved = savedRecipes.some(
        (recipeData) => recipeData.recipe.uri === data.recipe.uri
    );

    const handleOpenRecipe = (recipeHref) => {
        setSelectedRecipe(recipeHref);
        navigate(`/recipe`);
        window.scrollTo({ top: 0 });
    };

    const handleSaveRecipe = (e) => {
        e.stopPropagation();
        saveRecipe(data);
        showMessage(
            recipeSaved ? "The recipe removed from the favourites" : "The recipe saved!",
            "success"
        );
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
                            <div className="w-[40px] h-[40px]" onClick={handleSaveRecipe}>
                                <BookmarkIcon filled={recipeSaved} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
