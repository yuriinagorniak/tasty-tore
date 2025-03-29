import { useContext } from "react";

import RecipeSearchBg from "../../assets/Recipes/recipes-search-bg.jpg";
import { RecipeContext } from "../../contexts/RecipeContextProvider/RecipeContext";

export const RecipeSearch = () => {
    const { query, setQuery, handleSearch } = useContext(RecipeContext);

    return (
        <section
            className="tint-bg bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${RecipeSearchBg})` }}
        >
            <div className="container flex flex-col items-center pt-24 pb-36 text-center text-(--secondary-text-color) font-bold">
                <h3 className="text-4xl">Find your next favourite recipe</h3>
                <form onSubmit={handleSearch} className="mt-10 flex items-center gap-2">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for recipes..."
                        // className="px-4 py-2 border rounded-lg shadow-md w-64 focus:outline-none focus:ring-2 focus:ring-golden-sand"
                        className="w-[600px] h-[50px] rounded-3xl bg-[#d9d9d9] text-[#111111] px-5 shadow-md focus:outline-none focus:ring-2 focus:ring-golden-sand"
                    />
                    <button
                        type="submit"
                        className="h-[50px] px-4 text-white rounded-lg hover:bg-(--secondary-bg-color) hover:text-black transition"
                    >
                        Search
                    </button>
                </form>
            </div>
        </section>
    );
};

// import RecipeSearchBg from "../../assets/Recipes/recipes-search-bg.jpg";

// export const RecipeSearch = () => {
//     return (
//         <section
//             className="tint-bg bg-cover bg-no-repeat bg-center"
//             style={{ backgroundImage: `url(${RecipeSearchBg})` }}
//         >
//             <div className="container pt-24 pb-36 text-center text-(--secondary-text-color) font-bold">
//                 <h3 className="text-4xl">Find your next favourite recipe</h3>
//                 <input type="text" className=" mt-10 w-[600px] h-[50px] rounded-3xl bg-[#d9d9d9] text-[#111111] px-5" placeholder="Search..." />
//             </div>
//         </section>
//     );
// };
