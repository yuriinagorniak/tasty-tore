import { useContext } from "react";
import FavouriteRecipesBg from "../assets/FavouriteRecipes/bg.jpg";

import { RecipeCard } from "../components";
import { PageBanner } from "../shared";
import { SavedRecipesContext } from "../contexts";

export const FavouriteRecipes = () => {
    const { savedRecipes } = useContext(SavedRecipesContext);

    return (
        <div>
            <PageBanner
                bg={FavouriteRecipesBg}
                pageTitle="Your personal recipe collection"
            ></PageBanner>
            {savedRecipes && (
                <div className="container pb-[90px]">
                    <div>
                        {savedRecipes.length > 0 ? (
                            <div className="w-[95%] mx-auto grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 pt-14">
                                {savedRecipes.map((data) => (
                                    <div className="w-[325px] h-[165px]" key={data.recipe.uri}>
                                        <RecipeCard data={data} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="m-auto w-[90%] sm:w-full text-center font-bold text-4xl py-10">
                                <p>Nothing here… yet. Start exploring and save what you love</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
