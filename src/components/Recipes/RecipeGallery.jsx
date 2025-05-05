import { useContext, useRef } from "react";

import { RecipeFilter } from "./RecipeFilter";
import { RecipeCard } from "../../components";
import CircularProgress from "@mui/material/CircularProgress";

import { RecipeContext } from "../../contexts/RecipeContextProvider/RecipeContext";


export const RecipeGallery = () => {
    const { recipes, loading, error, handleNextPageSearch } = useContext(RecipeContext);

    return (
        <div className="w-[75%]">
            {error && <p>Something went wrong. Please try again.</p>}
            {loading && <div className="w-full flex justify-center pt-10"><CircularProgress color="inherit"/></div>}
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