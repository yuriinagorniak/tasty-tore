import { useContext, useRef } from "react";

import { RecipeFilter } from "./RecipeFilter";
import { RecipeCard } from "../../shared";

import { RecipeContext } from "../../contexts/RecipeContextProvider/RecipeContext";


export const RecipeGallery = () => {
    const { recipes, loading, error, handleNextPageSearch } = useContext(RecipeContext);


    const rendersCount1 = useRef(0);
    rendersCount1.current += 1;
    // console.log("Recipe Gallery - " + rendersCount1.current);




    return (
        <div className="w-[75%]">
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
            {!error && !loading && recipes && (
                <div className="flex flex-col gap-10 justify-center">
                    {recipes.length > 0 ? (
                        <>
                            <div className="w-[100%] flex flex-wrap gap-10">
                                {recipes.map((data) => (
                                    <div
                                        className="w-[325px] h-[165px]"
                                        key={data.recipe.uri}
                                    >
                                        <RecipeCard data={data} />
                                    </div>
                                ))}
                            </div>
                            <button onClick={() => handleNextPageSearch()}>Next page</button>
                        </>
                    ) : (
                        <p>Recipes not found</p>
                    )}
                </div>
            )}
        </div>
    );
};