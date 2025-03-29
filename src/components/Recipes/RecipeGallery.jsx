import { useContext } from "react";

import { RecipeFilter } from "./RecipeFilter";
import { RecipeCard } from "../../shared";

import { RecipeContext } from "../../contexts/RecipeContextProvider/RecipeContext";

export const RecipeGallery = () => {
    const { recipes, loading, error } = useContext(RecipeContext);

    return (
        <section>
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
            {!error && !loading && (
                <div className="container flex px-10 pt-[60px] pb-[90px] gap-10 justify-center">
                    {/* <RecipeFilter /> */}
                    {/* <div className="w-[75%] flex flex-wrap gap-10"> */}
                    {recipes.length > 0 ? (
                        <div className="w-[100%] flex flex-wrap gap-10">
                            {recipes.map((recipe) => (
                                <div className="w-[325px] h-[165px]">
                                    <RecipeCard key={recipe.label} data={recipe} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Recipes not found</p>
                    )}
                </div>
            )}
        </section>
    );
};
