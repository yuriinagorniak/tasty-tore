import axios from "axios";
import { useState, useEffect } from "react";

const foodAppId = import.meta.env.VITE_FOOD_APP_ID;
const foodAppKey = import.meta.env.VITE_FOOD_APP_KEY;

export const useFetchProduct = (query = "") => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState(null);

    const fetchProduct = async () => {
        try {
            setLoading(true);
            const response = await axios.get("https://api.edamam.com/api/food-database/v2/parser", {
                params: {
                    app_id: foodAppId,
                    app_key: foodAppKey,
                    ingr: query,
                },
            });

            setResults(response.data);
            
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, [query]);

    return { error, loading, results };
};