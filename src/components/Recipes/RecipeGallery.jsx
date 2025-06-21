import { useContext, useRef } from "react";

import { RecipeFilter } from "./RecipeFilter";
import { RecipeCard } from "../../components";
import CircularProgress from "@mui/material/CircularProgress";

import { RecipeContext } from "../../contexts/RecipeContextProvider/RecipeContext";


export const RecipeGallery = () => {
    const { recipes, loading, error, handleNextPageSearch } = useContext(RecipeContext);

    return (
        <div className="w-[80%] md:w-[90%] lg:w-[70%] xl:w-[80%]">
            {error && <p>Something went wrong. Please try again.</p>}
            {loading && <div className="w-full flex justify-center pt-10"><CircularProgress color="inherit"/></div>}
            {!error && !loading && recipes && (
                <div className="flex flex-col gap-10 justify-center">
                    {recipes.length > 0 ? (
                        <>
                            {/* <div className="w-[100%] flex flex-wrap items-center md:items-start justify-center lg:justify-start gap-10"> */}
                            <div className="m-auto w-full md:w-[90%] grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 justify-items-center">
                                {recipes.map((data) => (
                                    <div
                                        // className="w-[325px] h-[165px] md:w-[280px] md:h-[145px] lg:w-[325px] lg:h-[165px]"
                                        // className="w-[325px] h-[165px]"
                                        className="w-full aspect-[2/1]"
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