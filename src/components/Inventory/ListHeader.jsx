import { SortButton } from "./SortButton";
import { DownArrow } from "../../shared";

export const ListHeader = () => {
    return (
        <>

            <div className="m-auto flex w-[90%] sm:w-[75%] items-center justify-around text-[1rem] sm:text-xl font-bold">
                <div className="flex-2 flex items-center">
                    <h3>Product</h3>
                </div>
                <h3 className="flex-1">Expired By</h3>
                <h3 className="flex-1 text-right ">Quantity</h3>
            </div>
        </>
    );
};
