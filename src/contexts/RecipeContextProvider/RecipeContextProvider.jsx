import { useState, useEffect } from "react";
import axios from "axios";

import { RecipeContext } from "./RecipeContext";

export const RecipeContextProvider = ({ children }) => {
    // const [pages, setPages] = useState({1: link, 2: link});
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        fetchRecipes();
    };

    const fetchRecipes = async () => {
        try {
            const response = await axios.get(
                // "https://api.edamam.com/api/recipes/v2?type=public&q=e&app_id=be2442eb&app_key=0f3651d1009d94fb20137cfa20c39d2d",
                // {
                //     headers: {
                //         "Edamam-Account-User": "be2442eb",
                //     },
                // }

                "https://api.edamam.com/api/recipes/v2",
                {
                    params: {
                        type: "public",
                        q: query || "e",
                        app_id: "be2442eb",
                        app_key: "0f3651d1009d94fb20137cfa20c39d2d",
                    },
                    headers: {
                        "Edamam-Account-User": "be2442eb",
                    },
                }
            );
            setRecipes(response.data.hits);
            setLoading(false);
        } catch (err) {
            setError("Failed to fetch recipes: " + err);
            setLoading(false);
        }
    };

    // Fetch data from Edamam API
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
    };

    return <RecipeContext.Provider value={ctxValue}>{children}</RecipeContext.Provider>;
};
