import { useState, useEffect } from "react";
import axios from "axios";

const recipeAppId = import.meta.env.VITE_RECIPE_APP_ID;
const recipeAppKey = import.meta.env.VITE_RECIPE_APP_KEY;

import { RecipeContext } from "./RecipeContext";

export const RecipeContextProvider = ({ children }) => {
    // const [pages, setPages] = useState({1: link, 2: link});
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [recipeFilters, setRecipeFilters] = useState({});
    const [selectedRecipe, setSelectedRecipe] = useState("");
    const [nextPageHref, setNextPageHref] = useState("");

    const fetchRecipes = async (nextPageHref) => {
        setLoading(true);
        try {
            setError(null);
            setLoading(true);
            const response = await axios.get(nextPageHref ?? "https://api.edamam.com/api/recipes/v2", {
                params: {
                    type: "public",
                    q: query || "e",
                    app_id: recipeAppId,
                    app_key: recipeAppKey,
                    ...recipeFilters,
                },
                headers: {
                    "Edamam-Account-User": recipeAppId,
                },
            });
            setRecipes(response.data?.hits ?? []);
            setNextPageHref(response.data["_links"]?.next?.href ?? '');
            setLoading(false);
        } catch (err) {
            setError("Failed to fetch recipes: " + err);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (e) => {
        if (e) {
            e.preventDefault();
        }
        fetchRecipes(null);
    };
    
    const handleNextPageSearch = async () => {
        fetchRecipes(nextPageHref);
    };

    useEffect(() => {
        handleSearch();
    }, [recipeFilters]);

    useEffect(() => {
        fetchRecipes();
    }, []);

    const ctxValue = {
        recipes,
        loading,
        error,
        query,
        setQuery,
        handleSearch,
        setRecipeFilters,
        selectedRecipe,
        setSelectedRecipe,
        handleNextPageSearch
    };

    return <RecipeContext.Provider value={ctxValue}>{children}</RecipeContext.Provider>;
};
