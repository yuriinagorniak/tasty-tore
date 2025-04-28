import { useState, useContext } from "react";
import { RecipeContext } from "../../contexts/RecipeContextProvider/RecipeContext";

import { FilterSection, FilterTag } from "../../shared";

import { recipeFilters } from "../../constants/recipeFilters";

export const RecipeFilter = () => {
    const { setRecipeFilters } = useContext(RecipeContext);

    const [filtersApplied, setFiltersApplied] = useState({});
    const [openedFilters, setOpenedFilters] = useState({});

    const handleOpenFilter = (key) => {
        setOpenedFilters((prev) => ({ ...prev, [key]: prev[key] ? false : true }));
    };

    const handleChangeFilter = (key, type) => {
        setFiltersApplied((prev) => ({
            ...prev,
            [key]: prev[key]?.key === type.key ? null : type,
        }));
    };

    const resetAllFilters = () => {
        setFiltersApplied({});
    }

    const applyFilters = () => {
        let convertedRecipes = JSON.parse(JSON.stringify(filtersApplied));
        convertedRecipes = Object.entries(convertedRecipes).reduce((result, [filterKey, selectedType]) => {
            if (selectedType) {
                result[filterKey] = selectedType.key;
            }
            return result;
        }, {});
        setRecipeFilters(convertedRecipes);
    };

    return (
        <div className="w-[20%] bg-[#373737] rounded-xl py-5 px-4">
            <h3 className="text-center text-2xl font-bold">Filter search</h3>
            <div className="flex gap-1 py-3 flex-wrap">
                {Object.entries(filtersApplied).length > 0 &&
                    Object.entries(filtersApplied).map(([key, selectedType]) => {
                        return (
                            selectedType && (
                                <FilterTag
                                    key={selectedType.key}
                                    selectionType={selectedType}
                                    active={true}
                                    filterKey={key}
                                    handleChangeFilter={handleChangeFilter}
                                />
                            )
                        );
                    })}
            </div>
            {recipeFilters.map((filter) => (
                <FilterSection
                    key={filter.key}
                    filter={filter}
                    openedFilters={openedFilters}
                    handleOpenFilter={handleOpenFilter}
                    filtersApplied={filtersApplied}
                    handleChangeFilter={handleChangeFilter}
                />
            ))}

            <div className="flex justify-between pt-5">
                <button onClick={resetAllFilters}>Reset all</button>
                <button onClick={applyFilters} className="bg-[#e0cfa4] text-[#373737] py-1 px-3 rounded-xl">Apply</button>
            </div>
        </div>
    );
};