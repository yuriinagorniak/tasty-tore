import { useContext, useState, useRef } from "react";
import { useFetchProduct } from "../../hooks";

import { SnackbarContext, ShoppingListContext } from "../../contexts";

import { ProductSelect, MeasureSelect } from "./";

const inputDebounce = (func, delay = 300) => {
    let timer;
    return (query) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.call(this, query);
            console.log("debounce called");
        }, delay);
    };
};

export const AddProductInput = () => {
    const { addSingleProduct } = useContext(ShoppingListContext);
    const { showMessage } = useContext(SnackbarContext);
    const { results, error, loading, fetchProduct } = useFetchProduct();

    const [inputValue, setInputValue] = useState("");
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [measureInputValue, setMeasureInputValue] = useState("");
    const [selectedMeasure, setSelectedMeasure] = useState(null);

    const [quantityInputValue, setQuantityInputValue] = useState(0);

    const updateQuery = (q) => {
        if (q.trim().length && !selectedProduct) {
            console.log(selectedProduct);
            fetchProduct(q);
        }
    };

    const saveInput = useRef(inputDebounce(updateQuery, 1000));

    const handleChange = (value) => {
        setInputValue(value);
        saveInput.current(value);
    };

    const handleQuantityChange = (value) => {
        console.log(value);
        setQuantityInputValue(value);
    };

    const handleAddProduct = () => {
        const quantityValue = parseFloat(quantityInputValue);

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
                quantity: quantityValue,
                measure: selectedMeasure.label.toLowerCase(),
            };
            addSingleProduct(newProduct);
            showMessage("product added", "success");
        } else if (!selectedProduct) {
            showMessage("Select the product", "warning");
        } else if (!selectedMeasure) {
            showMessage("Choose the measure unit", "warning");
        } else if (isNaN(quantityInputValue)) {
            showMessage("Quantity field should contain a number", "error");
        } else if (quantityInputValue <= 0) {
            showMessage("Quantity must be higher than 0", "error");
        }
    };

    return (
        <section className="flex items-center justify-center gap-3 mb-10">
            <p>Add a product:</p>
            <ProductSelect
                results={results}
                selectedProduct={selectedProduct}
                inputValue={inputValue}
                handleChange={handleChange}
                setSelectedProduct={setSelectedProduct}
                setInputValue={setInputValue}
                setSelectedMeasure={setSelectedMeasure}
                setMeasureInputValue={setMeasureInputValue}
                loading={loading}
            />
            <MeasureSelect
                selectedProduct={selectedProduct}
                selectedMeasure={selectedMeasure}
                measureInputValue={measureInputValue}
                setSelectedMeasure={setSelectedMeasure}
                setMeasureInputValue={setMeasureInputValue}
            />
            <input
                className="w-[130px] pl-[14px] py-[16px] bg-[var(--additional-text-color)] rounded-sm"
                type="number"
                value={quantityInputValue}
                onChange={(e) => handleQuantityChange(e.target.value)}
                min="0"
                step="0.1"
            />
            <button type="button" onClick={handleAddProduct}>
                Add
            </button>
        </section>
    );
};
