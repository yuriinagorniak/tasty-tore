import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { productFormActionTypes } from "./reducers/productFormReducer";

export const MeasureSelect = ({
    state,
    dispatch,
}) => {
    const {selectedMeasure, selectedProduct, measureInputValue} = state

    return (
        <Autocomplete
            disablePortal
            options={selectedProduct?.measures || []}
            getOptionLabel={(item) => item.label || ""}
            value={selectedMeasure}
            inputValue={measureInputValue}
            onInputChange={(event, newInputValue) => {
                if (!selectedMeasure) {
                    dispatch({ type: productFormActionTypes.SET_INPUT, payload: newInputValue });
                }
            }}
            onChange={(event, newValue) => {
                dispatch({ type: productFormActionTypes.SET_MEASURE, payload: newValue ?? null });
                dispatch({
                    type: productFormActionTypes.SET_MEASURE_INPUT,
                    payload: newValue ? newValue.label : "",
                });
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
    );
};
