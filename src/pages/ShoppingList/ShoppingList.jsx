import { useContext, useState, useRef } from "react";
import { useFetchProduct } from "../../hooks";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { PageBanner } from "../../shared";
import ShoppingListBg from "../../assets/ShoppingList/bg.jpeg";
import { ShoppingListContext } from "../../contexts";

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

export const ShoppingList = () => {
    const { shoppingList, addSingleProduct, deleteProduct } = useContext(ShoppingListContext);
    const [query, setQuery] = useState(null);
    const { results, error, loading } = useFetchProduct(query);

    const [inputValue, setInputValue] = useState("");
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [measureInputValue, setMeasureInputValue] = useState("");
    const [selectedMeasure, setSelectedMeasure] = useState(null);

    const [quantityInputValue, setQuantityInputValue] = useState(0);
    const [selectedQuantity, setSelectedQuantity] = useState(null);

    const updateQuery = (q) => {
        setQuery(q);
    };

    const saveInput = useRef(inputDebounce(updateQuery, 1000));

    const handleChange = (value) => {
        setInputValue(value);
        saveInput.current(value);
    };

    const handleQuantityChange = (value) => {
        // if (value < 0) {
        //     setQuantityInputValue(0);
        // } else {
        setQuantityInputValue(+value);
        // }
    };

    const handleAddProduct = () => {
        console.log("Here we are");
        console.log(!!selectedProduct);
        console.log(!!selectedMeasure);
        console.log(!!quantityInputValue);
        console.log(isNaN(+"Hello"));
        if (
            selectedProduct &&
            selectedMeasure &&
            quantityInputValue &&
            !isNaN(quantityInputValue) &&
            quantityInputValue > 0
        ) {
            console.log("Here we are as well");
            const newProduct = {
                food: selectedProduct.food.label,
                foodId: selectedProduct.food.foodId,
                foodCategory: selectedProduct.food.category,
                image: selectedProduct.food.image ?? "",
                quantity: +quantityInputValue,
                measure: selectedMeasure.label.toLowerCase(),
            };
            addSingleProduct(newProduct);
        }
    };

    console.log("selectedProduct");
    console.log(selectedProduct);
    console.log(selectedMeasure);

    return (
        <div>
            <PageBanner bg={ShoppingListBg} pageTitle="Shopping list"></PageBanner>
            <div className="container text-center py-10 flex flex-col">
                <div className="flex items-center justify-center gap-3 mb-10">
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
                            if (
                                !newValue ||
                                selectedProduct?.food.foodId !== newValue?.food.foodId
                            ) {
                                setSelectedMeasure(null);
                                setMeasureInputValue("");
                            }
                        }}
                        loading={loading}
                        isOptionEqualToValue={(option, value) =>
                            option.food.foodId === value.food.foodId
                        }
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
                </div>
                {shoppingList.length > 0 ? (
                    <div>
                        {shoppingList.map((prod) => (
                            <div className="flex gap-5">
                                <p key={prod.foodId}>
                                    {prod.food} -{" "}
                                    {prod.amount.map((am) => `${am.quantity} ${am.measure};   `)}
                                </p>
                                <button className="p-1 border-2 border-[var(--primary-text-color)] rounded-md" onClick={() => deleteProduct(prod.foodId)}>del</button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Shopping list is empty</p>
                )}
            </div>
        </div>
    );
};