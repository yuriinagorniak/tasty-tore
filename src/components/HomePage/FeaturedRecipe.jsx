import { useContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import { PlateIcon } from "../../shared";
import FeaturedRecipeBg from "../../assets/HomePage/featured-recipe-bg.jpg";
import { RecipeContext } from "../../contexts";
import { RecipeCard } from "../../components";

export const FeaturedRecipe = () => {
    const { recipes } = useContext(RecipeContext);
    const today = new Date();
    const dayName = today.toLocaleDateString("en-US", { weekday: "long" }).toUpperCase();

    return (
        <section
            className="bg-no-repeat bg-cover bg-right "
            style={{ backgroundImage: `url(${FeaturedRecipeBg})` }}
        >
            <div className="container pt-[120px] pb-[120px] flex justify-between items-center">
                <div className="flex flex-col items-center w-[40%] gap-10">
                    <div className="lg:w-[180px] lg:h-[180px] 2xl:w-[200px] 2xl:h-[200px]">
                        <PlateIcon />
                    </div>
                    <h3 className="lg:text-4xl xl:text-5xl font-bold text-white xl:w-[100%] 2xl:w-[80%] text-center">
                        SAVOUR THE <span className="text-(--primary-text-color)">{dayName}</span>{" "}
                        SPECIAL
                    </h3>
                </div>
                <div className="2xl:w-[40%] flex justify-end">
                    <div className="w-[425px] h-[265px]">
                        {recipes.length ? <RecipeCard data={recipes[2]} /> : <div className="w-full h-full flex items-center justify-center"><CircularProgress  color="inherit"/></div>}
                    </div>
                </div>
            </div>
        </section>
    );
};
