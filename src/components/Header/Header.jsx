import { useState, useEffect, useCallback } from "react";
import { MainLogo } from "../../shared";
import { NavLink, useLocation } from "react-router";
import { useUser } from "../../hooks/useUser";
import { HeaderLink } from "./HeaderLink";
import "./style.css";
import { NAVIGATION_LINKS } from "../../constants/NAVIGATION_LINKS";

export const Header = () => {
    const [openNavbar, setOpenNavbar] = useState(false);
    const { user } = useUser();

    const handleToggleNavbar = () => {
        setOpenNavbar((prev) => {
            const newValue = !prev;
            if (newValue) {
                document.body.classList.add("lock");
            } else {
                document.body.classList.remove("lock");
            }
            return newValue;
        });
    };

    const closeNavbar = useCallback(() => {
        if (openNavbar) {
            handleToggleNavbar();
        }
    }, [openNavbar]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1100) {
                closeNavbar();
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [closeNavbar]);

    return (
        <header className="header-container w-full p-5 bg-[var(--main-bg-color)]">
            <div className="container">
                <nav className="header-navbar w-full">
                    <ul className="header-navbar__list w-full text-xl flex items-center flex-wrap gap-2">
                        <li className="header-navbar__logo">
                            <NavLink to="/" onClick={closeNavbar}>
                                <MainLogo />
                            </NavLink>
                        </li>
                        <div
                            className={`header-navbar__links-container ${
                                openNavbar && "active"
                            }  flex-1 `}
                        >
                            <ul className="h-full flex justify-around gap-3">
                                {NAVIGATION_LINKS.general.map((link) => (
                                    <li key={link.content} onClick={closeNavbar}>
                                        <HeaderLink path={link.path}>{link.content}</HeaderLink>
                                    </li>
                                ))}
                                {NAVIGATION_LINKS[user ? "private" : "auth"].map((link) => (
                                    <li key={link.content} onClick={closeNavbar}>
                                        <HeaderLink path={link.path}>{link.content}</HeaderLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ul>
                    <div
                        className={`header-nav__burger md:hidden ${openNavbar && "active"}`}
                        onClick={handleToggleNavbar}
                    >
                        <span></span>
                    </div>
                </nav>
            </div>
        </header>
    );
};
