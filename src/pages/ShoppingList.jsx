import { useContext, useState, useEffect, useRef } from "react";
import { AddProductInput, SortButton, ListItem, ListHeader, List } from "../components";

import { deepCopy } from "../utils";
import { PageBanner, SeparatorLine, CrossSign, DownArrow } from "../shared";
import ShoppingListBg from "../assets/ShoppingList/bg.jpeg";
import { ShoppingListContext } from "../contexts";
import { useSnackbar } from "../hooks";

export const ShoppingList = () => {
    const { shoppingList, deleteProductById, deleteProductsById } = useContext(ShoppingListContext);
    const showMessage = useSnackbar();
    const sortMethod = useRef(null);

    const handleDeleteProduct = (id) => {
        deleteProductById(id);
        showMessage("The product removed from the shopping list", "success");
    };

    return (
        <section>
            <PageBanner bg={ShoppingListBg} pageTitle="Shop smart, cook better"></PageBanner>
            <div className="container text-center py-10 flex flex-col gap-5">
                <AddProductInput />
                {shoppingList.length > 0 ? (
                    <List
                        sortMethod={sortMethod}
                        shoppingList={shoppingList}
                        handleDeleteProduct={handleDeleteProduct}
                        deleteProductsById={deleteProductsById}
                        showMessage={showMessage}
                    />
                ) : (
                    <p>Shopping list is empty</p>
                )}
            </div>
        </section>
    );
};
