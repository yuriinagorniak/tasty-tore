import { useContext } from "react";

import { PageBanner } from "../../shared";
import RecipeSearchBg from "../../assets/Recipes/recipes-search-bg.jpg";
import { RecipeContext } from "../../contexts/RecipeContextProvider/RecipeContext";

export const RecipeSearch = () => {
    const { query, setQuery, handleSearch } = useContext(RecipeContext);

    return (
        <PageBanner bg={RecipeSearchBg} pageTitle="Find your next favourite recipe">
            <form onSubmit={handleSearch} className="mt-10 flex flex-col sm:flex-row items-center gap-2">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for recipes..."
                    className="w-[300px] sm:w-[450px] md:w-[600px] h-[50px] rounded-3xl bg-[#d9d9d9] text-[#111111] px-5 shadow-md focus:outline-none focus:ring-2 focus:ring-golden-sand"
                />
                <button
                    type="submit"
                    className="h-[50px] px-4 text-white rounded-lg hover:bg-(--secondary-bg-color) hover:text-black transition"
                >
                    Search
                </button>
            </form>
        </PageBanner>
    );
};
