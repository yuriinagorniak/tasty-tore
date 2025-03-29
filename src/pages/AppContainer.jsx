import { Header } from "../components";
import { Outlet } from "react-router";

export const AppContainer = () => {
    return (
        <div className="w-full h-full">
            <Header />
            <Outlet />
        </div>
    );
};
