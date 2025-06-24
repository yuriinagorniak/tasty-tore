import { CrossSign, Checkbox } from "../../shared";
import { cn } from "../../utils";

export const ListItem = ({ prod = null, handleDeleteProduct = () => {}, onSelect = () => {}, selected = false }) => {
    return (
        prod && (
            <div className="w-[75%] flex items-center justify-between gap-5 group" key={prod.foodId}>
                <div className="flex items-center gap-1">
                    <Checkbox className={cn("cursor-pointer", `${selected ? "opacity-100" : "opacity-10 group-hover:opacity-30"}`)} onClick={() => onSelect(prod.foodId)}/>
                    <p className="capitalize">{prod.food}</p>
                </div>
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
