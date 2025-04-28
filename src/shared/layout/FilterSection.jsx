import { FilterTag } from "./FilterTag";
import { DownArrow } from "../icons";

export const FilterSection = ({
    filter,
    openedFilters,
    handleOpenFilter,
    filtersApplied,
    handleChangeFilter,
}) => {
    return (
        <div className="border-2 p-2 rounded-md mt-2">
            <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => {
                    handleOpenFilter(filter.key);
                }}
            >
                <h4>{filter.title}</h4>
                <DownArrow rotated={openedFilters[filter.key]} />
            </div>
            {openedFilters[filter.key] && (
                <div className="flex py-2 flex-wrap gap-2">
                    {filter.selectionList.map((selectionType) => (
                        <FilterTag
                            key={selectionType.key}
                            selectionType={selectionType}
                            active={filtersApplied[filter.key]?.key === selectionType.key}
                            filterKey={filter.key}
                            handleChangeFilter={handleChangeFilter}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};