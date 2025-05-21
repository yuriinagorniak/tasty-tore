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
    RecipeInfoSection,
    IngredientsSection,
    RecipeDetails,
    RecipeCard,
} from "../components";
import { ROUTES } from "../constants/routes";

export const RecipePage = () => {
    const { selectedRecipe, recipes } = useContext(RecipeContext);
    const { addRecipeIngredients } = useContext(ShoppingListContext);

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
            <div className="container bg-[#373737] pt-[60px] pb-[90px] px-3 rounded-md">
                <RecipeDetails handleOpenModal={handleOpenModal} />

                <div className="flex flex-col items-center my-20">
                    <SeparatorLine />
                    <RecipeInfoSection recipe={recipe} dataKey="healthLabels" label="Health" />
                    <SeparatorLine />
                    <RecipeInfoSection recipe={recipe} dataKey="dietLabels" label="Diet" />
                    <SeparatorLine />

                    <IngredientsSection
                        recipe={recipe}
                        addRecipeIngredients={addRecipeIngredients}
                    />

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
            <BasicModal openModal={openModal} handleCloseModal={handleCloseModal}>
                <AddRecipeSelection recipe={selectedRecipe} handleCloseModal={handleCloseModal} />
            </BasicModal>
        </section>
    );
};
