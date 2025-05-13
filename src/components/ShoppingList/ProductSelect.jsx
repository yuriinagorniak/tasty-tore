import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { productFormActionTypes } from "./reducers/productFormReducer";

export const ProductSelect = ({ results, handleChange, state, dispatch, loading }) => {
    const { selectedProduct, inputValue } = state;
    return (
        <Autocomplete
            disablePortal
            options={results?.hints || []}
            getOptionLabel={(item) => item.food.label}
            value={selectedProduct}
            inputValue={inputValue}
            onInputChange={(event, newInputValue, reason) => {
                if (reason === "input" && !selectedProduct) {
                    handleChange(newInputValue);
                }
            }}
            open={!!inputValue && !selectedProduct}
            onChange={(event, newValue) => {
                dispatch({ type: productFormActionTypes.SET_PRODUCT, payload: newValue ?? null });
                dispatch({
                    type: productFormActionTypes.SET_INPUT,
                    payload: newValue ? newValue.food.label : "",
                });
                if (!newValue || selectedProduct?.food.foodId !== newValue?.food.foodId) {
                    dispatch({ type: productFormActionTypes.SET_MEASURE, payload: null });
                    dispatch({ type: productFormActionTypes.SET_MEASURE_INPUT, payload: "" });
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
    );
};
