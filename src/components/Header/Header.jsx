import { MainLogo } from "../../shared";
import { NavLink, useLocation } from "react-router";
import { useUser } from "../../hooks/useUser";
import { HeaderLink } from "./HeaderLink";
import "./style.css";
import { ROUTES } from "../../constants/ROUTES";
import { NAVIGATION_LINKS } from "../../constants/NAVIGATION_LINKS";

export const Header = () => {
    const { user } = useUser();

    return (
        <header className="w-full p-5 bg-[var(--main-bg-color)]">
            <div className="container">
                <nav className="w-full">
                    <ul className="text-xl flex justify-around items-center">
                        <NavLink to="/">
                            <MainLogo />
                        </NavLink>
                        {NAVIGATION_LINKS.general.map((link) => (
                            <li key={link.content}>
                                <HeaderLink path={link.path}>{link.content}</HeaderLink>
                            </li>
                        ))}
                        {NAVIGATION_LINKS[user ? "private" : "auth"].map((link) => (
                            <li key={link.content}>
                                <HeaderLink path={link.path}>{link.content}</HeaderLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
