import { CrossSign } from "../../shared";

export const ListItem = ({ prod = null, handleDeleteProduct = () => {} }) => {
    let formattedDate = null;
    let isExpired = null;

    if (prod?.endDate) {
        formattedDate = new Intl.DateTimeFormat("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        }).format(new Date(prod.endDate));

        const today = new Date();
        const expiryDate = new Date(prod.endDate);
        isExpired = expiryDate < new Date(today.toDateString());
    }


    return (
        prod && (
            <div className="w-[75%] flex items-center justify-between gap-5">
                <p className="capitalize flex-2 text-left">{prod.food}</p>
                <p className={`capitalize flex-1 ${isExpired && "font-bold text-red-500"}`}>{formattedDate ?? ""}</p>
                <div className="flex-1 flex items-center justify-end gap-3">
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
