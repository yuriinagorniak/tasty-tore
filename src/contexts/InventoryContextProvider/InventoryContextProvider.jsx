import { InventoryContext } from "./InventoryContext";
import { useFirestore } from "../../hooks";
import { deepCopy } from "../../utils";

export const InventoryContextProvider = ({ children }) => {
    const [inventory, setInventory] = useFirestore('inventory', []);

    const addProduct = (newProduct, list) => {
        const updatedList = deepCopy(list);
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
            if (newProduct.endDate) updatedList[newProductIndex].endDate = newProduct.endDate;
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

    const addBoughtProduct = (product, updatedList) => {
        const newProduct = deepCopy(product);
        const newProductIndex = updatedList.findIndex((el) => el.foodId === newProduct.foodId);
        if (newProductIndex >= 0) {
            for (const amountEl of newProduct.amount) {
                const measureIndex = updatedList[newProductIndex].amount.findIndex(
                (am) => am.measure === amountEl.measure
            );

            if (measureIndex === -1) {
                updatedList[newProductIndex].amount.push(amountEl);
            } else {
                updatedList[newProductIndex].amount[measureIndex].quantity +=
                    amountEl.quantity;
            }
            }
        } else {
            updatedList.push({...newProduct, endDate: null});
        }
        
        return updatedList;
    }

    const handleAddSelectedBoughtProducts = (products = []) => {
        console.log("HASBP");
        console.log(products);
        setInventory((prev) => {
            const boughtProducts = deepCopy(products);
            let updatedInventory = deepCopy(prev); 

            for (let product of boughtProducts) {
                updatedInventory = addBoughtProduct(product, updatedInventory);
            }

            return updatedInventory;
        })
    }
    
    const ctxValue = { inventory, addSingleProduct, deleteProduct, handleAddSelectedBoughtProducts };
    return <InventoryContext.Provider value={ctxValue}>{children}</InventoryContext.Provider>;
};
