export const FilterTag = ({ selectionType, active, filterKey, handleChangeFilter }) => {
    return (
        <div
            className={`text-sm border p-1.5 rounded-2xl cursor-pointer ${
                active
                    ? "bg-[#e0cfa1] text-[#373737]"
                    : "bg-transparent text-[#e0cfa1]"
            }`}
            onClick={() => {
                handleChangeFilter(filterKey, selectionType);
            }}
        >
            {selectionType.title}
        </div>
    );
};