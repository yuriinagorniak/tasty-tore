import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export const ProductSelect = ({
    results,
    selectedProduct,
    inputValue,
    handleChange,
    setSelectedProduct,
    setInputValue,
    setSelectedMeasure,
    setMeasureInputValue,
    loading,
}) => {
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
    );
};
