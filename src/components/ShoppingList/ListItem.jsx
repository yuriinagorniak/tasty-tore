import { CrossSign } from "../../shared";

export const ListItem = ({ prod = null, handleDeleteProduct = () => {} }) => {
    return (
        prod && (
            <div className="w-[75%] flex items-center justify-between gap-5" key={prod.foodId}>
                <p className="capitalize">{prod.food}</p>
                <div className="flex items-center gap-3">
                    <div className="flex flex-col items-end justify-center">
                        {prod.amount.map(
                            (am) =>
                                am.quantity > 0 && (
                                    <p key={am.measure}>
                                        {am.quantity.toFixed(2)}{" "}
                                        {am.measure === "<unit>" ? "" : am.measure}
                                    </p>
                                )
                        )}
                    </div>
                    <button className="h-4 w-4" onClick={() => handleDeleteProduct(prod.foodId)}>
                        <CrossSign />
                    </button>
                </div>
            </div>
        )
    );
};
