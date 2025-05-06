import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export const MeasureSelect = ({
    selectedProduct,
    selectedMeasure,
    measureInputValue,
    setSelectedMeasure,
    setMeasureInputValue,
}) => {
    return (
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
    );
};
