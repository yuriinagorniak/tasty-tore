import { useSnackbar } from "../../hooks";
import { TransparentButton } from "../../shared";

export const IngredientsSection = ({ userLogged = false, recipe, addRecipeIngredients }) => {
    const showMessage = useSnackbar();

    return (
        <section className="w-[70%] md:w-[80%] flex flex-col md:flex-row justify-between my-10 gap-10 2xl:gap-4">
            <div className="w-full 2xl:w-[50%] flex flex-col justify-center items-center md:items-start">
                <h4 className="text-2xl font-bold">Ingredients:</h4>
                <ul className="w-full flex flex-col flex-wrap gap-2 pt-5 pl-3">
                    {recipe.ingredientLines.map((title) => (
                        <li key={title}>- {title}</li>
                    ))}
                </ul>
            </div>

            <div className="w-full 2xl:w-[30%] md:max-w-[250px]">
                {userLogged && (
                    <TransparentButton
                        handleClick={() => {
                            showMessage("Ingredients saved to the shopping list", "success");
                            addRecipeIngredients(recipe.ingredients);
                        }}
                    >
                        Add to shopping list
                    </TransparentButton>
                )}
            </div>
        </section>
    );
};
