import { useContext, useRef, useReducer } from "react";
import { useFetchProduct, useSnackbar } from "../../hooks";

import { ShoppingListContext } from "../../contexts";
import { ProductSelect, MeasureSelect } from "./";
import {
    productFormInitialState,
    productFormActionTypes,
    productFormReducer,
} from "./reducers/productFormReducer";
import { TransparentButton } from "../../shared";

const inputDebounce = (func, delay = 300) => {
    let timer;
    return (query) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.call(this, query);
        }, delay);
    };
};

export const AddProductInput = () => {
    const { addSingleProduct } = useContext(ShoppingListContext);
    const showMessage = useSnackbar();
    const { results, error, loading, fetchProduct } = useFetchProduct();
    const [state, dispatch] = useReducer(productFormReducer, productFormInitialState);

    const { selectedProduct, selectedMeasure, quantityInputValue } = state;

    const updateQuery = (q) => {
        if (q.trim().length && !selectedProduct) {
            fetchProduct(q);
        }
    };

    const saveInput = useRef(inputDebounce(updateQuery, 1000));

    const handleChange = (value) => {
        dispatch({ type: productFormActionTypes.SET_INPUT, payload: value });
        saveInput.current(value);
    };

    const handleQuantityChange = (value) => {
        dispatch({ type: productFormActionTypes.SET_QUANTITY, payload: value });
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
        <section className="w-[300px] sm:w-full m-auto flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 sm:px-2">
            <p>Add a product:</p>
            <div className="w-full sm:w-[300px] max-w-[300px]">
                <ProductSelect
                    results={results}
                    handleChange={handleChange}
                    dispatch={dispatch}
                    state={state}
                    loading={loading}
                />
            </div>
            <div className="max-sm:w-full sm:w-[300px] flex flex-row justify-between gap-3">
                <div className="flex-1">
                    <MeasureSelect state={state} dispatch={dispatch} />
                </div>
                <input
                    className="w-full flex-1 pl-[14px] py-[16px] bg-[var(--additional-text-color)] rounded-sm"
                    type="number"
                    value={quantityInputValue}
                    onChange={(e) => handleQuantityChange(e.target.value)}
                    min="0"
                    step="0.1"
                />
            </div>
            <TransparentButton className="w-full sm:w-[100px]" handleClick={handleAddProduct}>
                Add
            </TransparentButton>
        </section>
    );
};
