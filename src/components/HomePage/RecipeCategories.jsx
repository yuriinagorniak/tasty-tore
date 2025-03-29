import { NavLink } from "react-router";

import { PastaIcon, FishIcon, CupcakeIcon, FriedEggIcon, RecipeCategoryCard } from "../../shared";

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
    return (
        <section className="bg-white flex flex-col items-center justify-center">
            <div className="container pt-[60px] pb-[90px]">
                <h3 className="mb-[40px] text-[36px] font-bold text-black text-center">Recipes by category</h3>

                <div className="flex items-center justify-around px-5 flex-wrap">
                    {categories.map((category) => (
                        <NavLink key={category.title} to={category.link}>
                            <RecipeCategoryCard
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
