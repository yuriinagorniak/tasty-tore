export const productFormInitialState = {
    inputValue: "",
    selectedProduct: null,
    measureInputValue: "",
    selectedMeasure: null,
    quantityInputValue: 0,
};

export const productFormActionTypes = {
    SET_INPUT: "SET_INPUT",
    SET_PRODUCT: "SET_PRODUCT",
    SET_MEASURE_INPUT: "SET_MEASURE_INPUT",
    SET_MEASURE: "SET_MEASURE",
    SET_QUANTITY: "SET_QUANTITY",
    RESET_FORM: "RESET_FORM",
};

export function productFormReducer(state, action) {
    switch (action.type) {
        case productFormActionTypes.SET_INPUT:
            return { ...state, inputValue: action.payload };
        case productFormActionTypes.SET_PRODUCT:
            return {
                ...state,
                selectedProduct: action.payload,
                selectedMeasure: null,
                measureInputValue: "",
            };
        case productFormActionTypes.SET_MEASURE_INPUT:
            return { ...state, measureInputValue: action.payload };
        case productFormActionTypes.SET_MEASURE:
            return { ...state, selectedMeasure: action.payload };
        case productFormActionTypes.SET_QUANTITY:
            return { ...state, quantityInputValue: action.payload };
        case productFormActionTypes.RESET_FORM: 
            return productFormInitialState;
        default:
            return state;
    }
}
