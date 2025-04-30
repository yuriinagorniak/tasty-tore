import { useContext } from "react";
import FavouriteRecipesBg from "../assets/FavouriteRecipes/bg.jpg";

import { RecipeCard, PageBanner } from "../shared";
import { SavedRecipesContext } from "../contexts/SavedRecipesContextProvider/SavedRecipesContext";

export const FavouriteRecipes = () => {
    const { savedRecipes } = useContext(SavedRecipesContext);

    return (
        <div>
            <PageBanner
                bg={FavouriteRecipesBg}
                pageTitle="Your personal recipe collection"
            ></PageBanner>
            {savedRecipes && (
                <div className="container">
                    <div className="flex flex-wrap justify-left items-center gap-10 pt-14">
                        {savedRecipes.length > 0 ? (
                            savedRecipes.map((data) => (
                                <div className="w-[325px] h-[165px]" key={data.recipe.uri}>
                                    <RecipeCard data={data} />
                                </div>
                            ))
                        ) : (
                            <div className="w-full text-center font-bold text-4xl py-10">
                                Nothing here… yet. Start exploring and save what you love
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};