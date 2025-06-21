import { InventoryContext } from "./InventoryContext";
import { useFirestore } from "../../hooks";

export const InventoryContextProvider = ({ children }) => {
    const [inventory, setInventory] = useFirestore('inventore', []);

    const addProduct = (newProduct, list) => {
        const updatedList = JSON.parse(JSON.stringify(list));
        const newProductIndex = updatedList.findIndex((prod) => prod.foodId === newProduct.foodId);

        if (newProductIndex === -1) {
            updatedList.push({
                food: newProduct.food,
                foodId: newProduct.foodId,
                foodCategory: newProduct.foodCategory,
                image: newProduct.image,
                endDate: newProduct.endDate,
                amount: [
                    {
                        quantity: newProduct.quantity,
                        measure: newProduct.measure,
                    },
                ],
            });
        } else {
            if (newProduct.endDate) updatedList.endDate = newProduct.endDate;
            const newProductMeasureIndex = updatedList[newProductIndex].amount.findIndex(
                (am) => am.measure === newProduct.measure
            );

            if (newProductMeasureIndex === -1) {
                updatedList[newProductIndex].amount.push({
                    quantity: newProduct.quantity,
                    measure: newProduct.measure,
                });
            } else {
                updatedList[newProductIndex].amount[newProductMeasureIndex].quantity +=
                    newProduct.quantity;
            }
        }

        return updatedList;
    };

    const addSingleProduct = (product) => {
        setInventory((prev) => addProduct(product, prev));
    };

    const deleteProduct = (productId) => {
        setInventory((prev) => prev.filter((item) => item.foodId !== productId));
    };
    
    const ctxValue = { inventory, addSingleProduct, deleteProduct };
    return <InventoryContext.Provider value={ctxValue}>{children}</InventoryContext.Provider>;
};
