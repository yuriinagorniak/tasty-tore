import { SortButton } from "./SortButton";
import { DownArrow } from "../../shared";

export const ListHeader = ({ sortMethod = null, sortList = () => {} }) => {
    return (
        <>
            <div className="w-[80%] m-auto flex items-center justify-end gap-2">
                <p>Sort by</p>
                {/* <SortButton sortMethod={sortMethod} handleChange={sortList} /> */}
            </div>
            <div className="m-auto flex w-[75%] items-center justify-around text-xl font-bold">
                <div className="flex-2 flex items-center cursor-pointer" onClick={sortList}>
                    <h3>Product</h3>
                    {sortMethod && <DownArrow rotated={sortMethod === "DESC"} />}
                </div>
                <h3 className="flex-1">Expired By</h3>
                <h3 className="flex-1 text-right ">Quantity</h3>
            </div>
        </>
    );
};
