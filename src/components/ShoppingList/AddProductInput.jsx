import { useContext, useState, useRef } from "react";
import { useFetchProduct } from "../../hooks";

import { ShoppingListContext } from "../../contexts";
import { SnackbarContext } from "../../contexts";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const inputDebounce = (func, delay = 300) => {
    let timer;
    return (query) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.call(this, query);
            console.log("function called");
        }, delay);
    };
};

export const AddProductInput = () => {
    const { addSingleProduct } = useContext(ShoppingListContext);
    const { showMessage } = useContext(SnackbarContext);
    const [query, setQuery] = useState(null);
    const { results, error, loading } = useFetchProduct(query);

    const [inputValue, setInputValue] = useState("");
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [measureInputValue, setMeasureInputValue] = useState("");
    const [selectedMeasure, setSelectedMeasure] = useState(null);

    const [quantityInputValue, setQuantityInputValue] = useState(0);

    const updateQuery = (q) => {
        setQuery(q);
    };

    const saveInput = useRef(inputDebounce(updateQuery, 1000));

    const handleChange = (value) => {
        setInputValue(value);
        saveInput.current(value);
    };

    const handleQuantityChange = (value) => {
        setQuantityInputValue(+value);
    };

    const handleAddProduct = () => {
        if (
            selectedProduct &&
            selectedMeasure &&
            quantityInputValue &&
            !isNaN(quantityInputValue) &&
            quantityInputValue > 0
        ) {
            const newProduct = {
                food: selectedProduct.food.label,
                foodId: selectedProduct.food.foodId,
                foodCategory: selectedProduct.food.category,
                image: selectedProduct.food.image ?? "",
                quantity: +quantityInputValue,
                measure: selectedMeasure.label.toLowerCase(),
            };
            addSingleProduct(newProduct);
            showMessage("product added", "success");
        }
    };

    return (
        <section className="flex items-center justify-center gap-3 mb-10">
            <p>Add a product:</p>
            <Autocomplete
                disablePortal
                options={results?.hints || []}
                getOptionLabel={(item) => item.food.label}
                value={selectedProduct}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    if (!selectedProduct) {
                        handleChange(newInputValue);
                    }
                }}
                open={!!inputValue && !selectedProduct}
                onChange={(event, newValue) => {
                    setSelectedProduct(newValue ?? null);
                    setInputValue(newValue ? newValue.food.label : "");
                    if (!newValue || selectedProduct?.food.foodId !== newValue?.food.foodId) {
                        setSelectedMeasure(null);
                        setMeasureInputValue("");
                    }
                }}
                loading={loading}
                isOptionEqualToValue={(option, value) => option.food.foodId === value.food.foodId}
                sx={{
                    width: 300,
                    backgroundColor: "var(--additional-bg-color)",
                    borderRadius: "5px",
                }}
                renderOption={(props, option) => (
                    <li {...props} key={option.food.foodId + option.food.label}>
                        {option.food.label}
                    </li>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        // helperText={
                        //     selectedProduct ? "Clear to select a different product" : ""
                        // }
                        sx={{
                            "& *": {
                                color: "var(--primary-text-color)",
                            },
                            "& label": {
                                color: "var(--primary-text-color)",
                            },
                            "&:focus label:focus": {
                                color: "var(--primary-text-color)",
                            },
                            "&.Mui-focused label": {
                                color: "var(--primary-text-color)",
                            },
                        }}
                        label="Product"
                        disabled={!!selectedProduct}
                    />
                )}
            />
            <Autocomplete
                disablePortal
                options={selectedProduct?.measures || []}
                getOptionLabel={(item) => item.label || ""}
                value={selectedMeasure}
                inputValue={measureInputValue}
                onInputChange={(event, newInputValue) => {
                    if (!selectedMeasure) {
                        setSelectedMeasure(newInputValue);
                    }
                }}
                onChange={(event, newValue) => {
                    setSelectedMeasure(newValue ?? null);
                    setMeasureInputValue(newValue ? newValue.label : "");
                }}
                isOptionEqualToValue={(option, value) => option.uri === value.uri}
                sx={{
                    width: 130,
                    backgroundColor: "var(--additional-bg-color)",
                    borderRadius: "5px",
                }}
                renderOption={(props, option) => (
                    <li {...props} key={option.uri}>
                        {option.label}
                    </li>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        // helperText={
                        //     selectedMeasure ? "Clear to select a different measure" : ""
                        // }
                        sx={{
                            "& *": {
                                color: "var(--primary-text-color)",
                            },
                            "& label": {
                                color: "var(--primary-text-color)",
                            },
                            "&:focus label:focus": {
                                color: "var(--primary-text-color)",
                            },
                            "&.Mui-focused label": {
                                color: "var(--primary-text-color)",
                            },
                        }}
                        label="Measure"
                        disabled={!!selectedMeasure}
                    />
                )}
            />
            <input
                className="w-[130px] pl-[14px] py-[16px] bg-[var(--additional-text-color)] rounded-sm"
                type="number"
                value={quantityInputValue}
                onChange={(e) => handleQuantityChange(e.target.value)}
            />
            <button onClick={handleAddProduct}>Add</button>
        </section>
    );
};
