import { SortButton } from "./SortButton";
import { DownArrow } from "../../shared";

export const ListHeader = ({ sortMethod = null, sortList = () => {} }) => {
    return (
        <>
            <div className="w-[80%] m-auto flex items-center justify-end gap-2">
                <p>Sort by</p>
                <SortButton sortMethod={sortMethod} handleChange={sortList} />
            </div>
            <div className="flex w-full items-center justify-around text-xl font-bold">
                <div className="flex items-center cursor-pointer" onClick={sortList}>
                    <h3>Product</h3>
                    {sortMethod && <DownArrow rotated={sortMethod === "DESC"} />}
                </div>
                <h3>Quantity</h3>
            </div>
        </>
    );
};
