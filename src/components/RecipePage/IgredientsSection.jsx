import { useSnackbar } from "../../hooks";
import { TransparentButton } from "../../shared";

export const IngredientsSection = ({ recipe, addRecipeIngredients}) => {
    const showMessage = useSnackbar();

    return (
        <section className="w-[70%] flex flex-row justify-between my-10 gap-4">
            <div className="w-[50%]">
                <h4 className="text-2xl font-bold">Ingredients:</h4>
                <ul className="w-full flex flex-col flex-wrap gap-2 pt-5 pl-3">
                    {recipe.ingredientLines.map((title) => (
                        <li>- {title}</li>
                    ))}
                </ul>
            </div>

            <div className="w-[30%] flex flex-col items-center">
                <TransparentButton
                    handleClick={() => {
                        showMessage("Ingridients saved to the shopping list", "success");
                        addRecipeIngredients(recipe.ingredients);
                    }}
                >
                    Add to shopping list
                </TransparentButton>
            </div>
        </section>
    );
};
