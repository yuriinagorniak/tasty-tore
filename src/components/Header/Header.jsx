import { MainLogo } from "../../shared";
import { NavLink } from "react-router";
import "./style.css";

export const Header = () => {
    return (
        <header className="w-full p-5 bg-[var(--main-bg-color)]">
            <div className="container">
                <nav className="w-full">
                    <ul className="text-xl flex justify-around items-center">
                        <li>
                            <NavLink to="/">
                                <MainLogo />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="custom-link" to="/recipes">
                                Recipes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="custom-link" to="/favourites">
                                Favourites
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="custom-link" to="/meal-planner">
                                Meal Planner
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="custom-link" to="/shopping-list">
                                Shopping List
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
