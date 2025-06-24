import { SeparatorLine } from "../../shared";
import { RecipeInfoSection } from "./RecipeInfoSection";

export const RecipeLabels = ({ recipe }) => {
    return (
        recipe && (
            <>
                <SeparatorLine />
                <RecipeInfoSection recipe={recipe} dataKey="healthLabels" label="Health" />
                <SeparatorLine />
                <RecipeInfoSection recipe={recipe} dataKey="dietLabels" label="Diet" />
                <SeparatorLine />
            </>
        )
    );
};
