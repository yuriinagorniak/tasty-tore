import TestRecipeImg from "../../../../img/home-page/todays-recipe/test-recipe.jpg";
import { BookmarkIcon } from "../icons";

export const RecipeCard = ({ data }) => {
    console.log(data);

    return (
        <>
            {data.recipe && (
                <div
                    className="w-full h-full border-2 rounded-md bg-no-repeat bg-cover bg-center overflow-hidden"
                    style={{ backgroundImage: `url(${data.recipe.image})` }}
                >
                    <div className="bg-[rgba(0,0,0,0.8)] w-full h-full flex flex-col justify-end">
                        <div className="flex items-center justify-between p-3">
                            <p className="font-bold text-xl w-2/3 truncate" title={data.recipe.label}>
                                {data.recipe.label}
                            </p>
                            <div className="w-[50px] h-[50px]">
                                <BookmarkIcon />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
