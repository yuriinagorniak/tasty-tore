import { useContext, useState, useEffect, useRef } from "react";
import { AddProductInput, SortButton, ListItem, ListHeader } from "../components/ShoppingList";

import { deepCopy } from "../utils";
import { PageBanner, SeparatorLine, CrossSign, DownArrow } from "../shared";
import ShoppingListBg from "../assets/ShoppingList/bg.jpeg";
import { ShoppingListContext } from "../contexts";
import { useSnackbar } from "../hooks";

export const ShoppingList = () => {
    const { shoppingList, deleteProduct } = useContext(ShoppingListContext);
    const showMessage = useSnackbar();
    const [sortedShoppingList, setSortedShoppingList] = useState(deepCopy(shoppingList));
    const sortMethod = useRef(null);

    const handleDeleteProduct = (id) => {
        deleteProduct(id);
        showMessage("The product removed from the shopping list", "success");
    }; 

    const sortList = (e, newMethod = null) => {
        sortMethod.current = newMethod ?? (sortMethod.current === "ASC" ? "DESC" : "ASC");
        const newList = [...sortedShoppingList].sort((a, b) => {
            const foodA = a.food.toUpperCase();
            const foodB = b.food.toUpperCase();

            return sortMethod.current === "ASC"
                ? foodA.localeCompare(foodB)
                : foodB.localeCompare(foodA);
        });
        setSortedShoppingList(newList);
    };

    useEffect(() => {
        setSortedShoppingList(deepCopy(shoppingList));
        sortMethod.current = null;
    }, [shoppingList]);

    return (
        <section>
            <PageBanner bg={ShoppingListBg} pageTitle="Shop smart, cook better"></PageBanner>
            <div className="container text-center py-10 flex flex-col gap-5">
                <AddProductInput />
                {shoppingList.length > 0 ? (
                    <>
                        <ListHeader sortMethod={sortMethod.current} sortList={sortList} />
                        <SeparatorLine />
                        <div>
                            {sortedShoppingList.map((product) => (
                                <div className="my-2 flex flex-col items-center gap-2">
                                    <ListItem
                                        prod={product}
                                        handleDeleteProduct={handleDeleteProduct}
                                    />
                                    <SeparatorLine color="#373737" />
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <p>Shopping list is empty</p>
                )}
            </div>
        </section>
    );
};
