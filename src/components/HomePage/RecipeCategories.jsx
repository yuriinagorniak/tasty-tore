import { NavLink } from "react-router";

import { PastaIcon, FishIcon, CupcakeIcon, FriedEggIcon, RecipeCategoryCard } from "../../shared";
import { RecipeContext } from "../../contexts/RecipeContextProvider/RecipeContext";
import { useContext } from "react";

const categories = [
    {
        title: "Seafood",
        img: <FishIcon />,
        bgColor: "#0CC1B9",
        link: "/recipes",
    },
    {
        title: "Dessert",
        img: <CupcakeIcon />,
        bgColor: "#F65E71",
        link: "/recipes",
    },
    {
        title: "Breakfast",
        img: <FriedEggIcon />,
        bgColor: "#77BF0F",
        link: "/recipes",
    },
    {
        title: "Pasta",
        img: <PastaIcon />,
        bgColor: "#D69C04",
        link: "/recipes",
    },
];

export const RecipeCategories = () => {
    const { setQuery, handleSearch } = useContext(RecipeContext);
    const changeQuery = (query) => {
        setQuery(query);
        handleSearch();
    };

    return (
        <section className="bg-white flex flex-col items-center justify-center">
            <div className="container pt-[60px] pb-[90px]">
                <h3 className="px-10 mb-[40px] text-[36px] font-bold text-black text-center">
                    Recipes by category
                </h3>

                <div className="w-[80%] sm:w-full 2xl:w-[80%] m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-5">
                    {categories.map((category) => (
                        <NavLink key={category.title} to={category.link}>
                            <RecipeCategoryCard
                                onClick={() => changeQuery(category.title)}
                                icon={category.img}
                                title={category.title}
                                bgColor={category.bgColor}
                            />
                        </NavLink>
                    ))}
                </div>
            </div>
        </section>
    );
};