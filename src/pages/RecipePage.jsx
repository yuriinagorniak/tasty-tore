import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { CircularProgress } from "@mui/material";
import { useSnackbar } from "../hooks";

import {
    RecipeContext,
    SavedRecipesContext,
    ShoppingListContext,
    SnackbarContext,
} from "../contexts";
import { InfoTag, SeparatorLine, TransparentButton, BasicModal } from "../shared";
import {
    AddRecipeSelection,
    IngredientsSection,
    RecipeDetails,
    RecipeCard,
    RecipeLabels,
} from "../components";
import { ROUTES } from "../constants/ROUTES";
import { useUser } from "../hooks/useUser";

export const RecipePage = () => {
    const { selectedRecipe, recipes } = useContext(RecipeContext);
    const { addRecipeIngredients } = useContext(ShoppingListContext);
    const { user } = useUser();

    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();
    const recipe = selectedRecipe.recipe;

    const handleCloseModal = () => setOpenModal(false);
    const handleOpenModal = () => setOpenModal(true);

    const suggestedRecipes = recipes.filter((r) => r.recipe.label !== recipe.label).slice(0, 3);

    useEffect(() => {
        if (!selectedRecipe) {
            navigate(ROUTES.RECIPES);
        }
    }, [selectedRecipe, navigate]);

    if (!selectedRecipe) {
        return null;
    }

    return (
        <section>
            <div className="container w-full sm:w-[95%] max-w-[1280px] bg-[#373737] px-4 2xl:px-16 pt-6 pb-2 2xl:pt-[60px] 2xl:pb-[90px] sm:rounded-md">
                <RecipeDetails userLogged={!!user} handleOpenModal={handleOpenModal} />

                <div className="w-full flex flex-col items-center my-20">
                    <RecipeLabels recipe={recipe} />

                    <IngredientsSection
                        userLogged={!!user}
                        recipe={recipe}
                        addRecipeIngredients={addRecipeIngredients}
                    />

                    <div className="mt-20 flex flex-col items-center gap-8">
                        <h4 className="text-2xl font-bold">You might also like:</h4>
                        <div className="flex flex-wrap items-center justify-center gap-8">
                            {suggestedRecipes.map((recipe) => (
                                <div className="w-[325px] h-[165px]" key={recipe.recipe.uri}>
                                    <RecipeCard data={recipe} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <BasicModal openModal={openModal} handleCloseModal={handleCloseModal}>
                <AddRecipeSelection recipe={selectedRecipe} handleCloseModal={handleCloseModal} />
            </BasicModal>
        </section>
    );
};
