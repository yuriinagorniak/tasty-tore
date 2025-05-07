import { useState, useEffect } from "react";

import { ShoppingListContext } from "./ShoppingListContext";
import { useLocalStorage } from "../../hooks";

export const ShoppingListContextProvider = ({ children }) => {
    const { getFromStorage, setToStorage } = useLocalStorage("shoppingList");
    const initialValue = getFromStorage();
    const [shoppingList, setShoppingList] = useState(initialValue);

    const addProduct = (newProduct, list) => {
        const updatedList = JSON.parse(JSON.stringify(list));
        const newProductIndex = updatedList.findIndex(
            (prod) => prod.foodId === newProduct.foodId
        );
        
        if (newProductIndex === -1) {
            updatedList.push({
                food: newProduct.food,
                foodId: newProduct.foodId,
                foodCategory: newProduct.foodCategory,
                image: newProduct.image,
                amount: [
                    {
                        quantity: newProduct.quantity,
                        measure: newProduct.measure,
                    },
                ],
            });
        } else {
            const newProductMeasureIndex = updatedList[newProductIndex].amount.findIndex(
                (am) => am.measure === newProduct.measure
            );
            
            if (newProductMeasureIndex === -1) {
                updatedList[newProductIndex].amount.push({
                    quantity: newProduct.quantity,
                    measure: newProduct.measure,
                });
            } else {
                updatedList[newProductIndex].amount[newProductMeasureIndex].quantity += newProduct.quantity;
            }
        }

        return updatedList;
    }

    const addSingleProduct = (product) => {
        setShoppingList(prev => addProduct(product, prev));
    };

    const addRecipeIngredients = (recipeIngredients) => {
        setShoppingList((prev) => {
            const recipeIngredientsCopy = JSON.parse(JSON.stringify(recipeIngredients));
            let updatedList = JSON.parse(JSON.stringify(prev));
            
            for (let ingredient of recipeIngredientsCopy) {
                updatedList = addProduct(ingredient, updatedList);
            }

            return updatedList;
        });
    };

    const deleteProduct = (productId) => {
        setShoppingList((prev) => prev.filter((item) => item.foodId !== productId))
    }

    useEffect(() => {
        setToStorage(shoppingList);
    }, [shoppingList])

    const ctxValue = { shoppingList, addRecipeIngredients, addSingleProduct, deleteProduct };
    return <ShoppingListContext.Provider value={ctxValue}>{children}</ShoppingListContext.Provider>;
};
