import { useContext } from "react";
import { AddProductInput } from "../components/ShoppingList";

import { PageBanner } from "../shared";
import ShoppingListBg from "../assets/ShoppingList/bg.jpeg";
import { ShoppingListContext } from "../contexts";
import { useSnackbar } from "../hooks";

export const ShoppingList = () => {
    const { shoppingList, deleteProduct } = useContext(ShoppingListContext);
    const showMessage = useSnackbar();

    const handleDeleteProduct = (id) => {
        deleteProduct(id)
        showMessage("The product removed from the shopping list", "success");
    }   

    return (
        <div>
            <PageBanner bg={ShoppingListBg} pageTitle="Shop smart, cook better"></PageBanner>
            <div className="container text-center py-10 flex flex-col">
                <AddProductInput />
                {shoppingList.length > 0 ? (
                    <div>
                        {shoppingList.map((prod) => (
                            <div className="flex gap-5">
                                <p key={prod.foodId}>
                                    {prod.food} -{" "}
                                    {prod.amount.map((am) => `${am.quantity.toFixed(2)} ${am.measure};   `)}
                                </p>
                                <button
                                    className="p-1 border-2 border-[var(--primary-text-color)] rounded-md"
                                    onClick={() => handleDeleteProduct(prod.foodId)}
                                >
                                    del
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Shopping list is empty</p>
                )}
            </div>
        </div>
    );
};
