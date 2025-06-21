import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const SortButton = ({ sortMethod = null, handleChange = () => {} }) => {
    return (
        <ToggleButtonGroup
            value={sortMethod}
            exclusive
            onChange={(e, value) => handleChange(value)}
            aria-label="sort method"
            className="h-[30px]"
        >
            <ToggleButton value="ASC" aria-label="ascending">
                ASC
            </ToggleButton>
            <ToggleButton value="DESC" aria-label="descending">
                DESC
            </ToggleButton>
        </ToggleButtonGroup>
    );
};
