import { useState, useEffect } from "react";
import { ListItem, ListHeader } from "./";
import { SeparatorLine, TransparentButton } from "../../shared";
import { deepCopy } from "../../utils";
import { useContext } from "react";
import { InventoryContext } from "../../contexts";

export const List = ({ sortMethod, shoppingList, handleDeleteProduct, deleteProductsById }) => {
    const { handleAddSelectedBoughtProducts } = useContext(InventoryContext);
    const [selectedProductsIds, setSelectedProductsIds] = useState([]);
    const [sortedShoppingList, setSortedShoppingList] = useState(deepCopy(shoppingList));

    const handleBoughtProducts = () => {
        if (selectedProductsIds.length) {
            const selectedProducts = shoppingList.filter(item => selectedProductsIds.indexOf(item.foodId) >= 0);
            deleteProductsById(selectedProductsIds);
            handleAddSelectedBoughtProducts(selectedProducts);
            setSelectedProductsIds([]); 
        }    
    }


    const handleSelect = (prodId, justRemove = false) => {
        const prodIndex = selectedProductsIds.indexOf(prodId);
        if (prodIndex >= 0) {
            setSelectedProductsIds((prev) => {
                const newValue = deepCopy(prev);
                newValue.splice(prodIndex, 1);
                return newValue;
            });
        } else if (!justRemove) {
            setSelectedProductsIds((prev) => [...prev, prodId]);
        }
    };

    const onDelete = (id) => {
        handleSelect(id, true);
        handleDeleteProduct(id);
    }

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
        sortedShoppingList && (
            <>
                <ListHeader sortMethod={sortMethod.current} sortList={sortList} />
                <SeparatorLine />
                <div>
                    {sortedShoppingList.map((product) => (
                        <div key={product.foodId} className="my-2 flex flex-col items-center gap-2">
                            <ListItem
                                prod={product}
                                handleDeleteProduct={onDelete}
                                onSelect={handleSelect}
                                selected={selectedProductsIds.indexOf(product.foodId) >= 0}
                            />
                            <SeparatorLine color="#373737" />
                        </div>
                    ))}
                </div>
                {selectedProductsIds.length >= 1 && <TransparentButton handleClick={handleBoughtProducts} className="m-auto rounded-md w-[155px] md:w-[230px]">Add to inventory</TransparentButton>}
            </>
        )
    );
};
