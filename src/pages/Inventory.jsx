import { PageBanner, SeparatorLine } from "../shared";
import { AddProductInput, ListItem, ListHeader } from "../components/Inventory";
import { useContext } from "react";
import { InventoryContext } from "../contexts";
import { useSnackbar } from "../hooks";

export const Inventory = () => {
    const showMessage = useSnackbar();
    const { inventory, deleteProduct } = useContext(InventoryContext);

    const handleDeleteProduct = (id) => {
        deleteProduct(id);
        showMessage("The product removed from the inventory", "success");
    };

    return (
        <>
            <PageBanner pageTitle="Less waste, more taste" />
            <div className="container text-center py-10 flex flex-col gap-5">
                <AddProductInput />
                {inventory.length > 0 ? (
                    <div className="w-full flex flex-col gap-5">
                        <ListHeader />
                        <SeparatorLine className="w-[95%] sm:w-[80%]"/>
                        <div>
                            {inventory.map((product) => (
                                <div
                                    className="my-2 flex flex-col items-center gap-2"
                                    key={product.foodId}
                                >
                                    <ListItem
                                        prod={product}
                                        handleDeleteProduct={handleDeleteProduct}
                                    />
                                    <SeparatorLine className="w-[92%] sm:w-[80%]" color="#373737" />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p>Inventory is empty</p>
                )}
            </div>
        </>
    );
};
