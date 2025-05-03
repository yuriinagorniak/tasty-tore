import { Header } from "../components";
import { Outlet } from "react-router";
import { MessageBar } from "../components";

export const AppContainer = () => {
    return (
        <div className="w-full h-full">
            <Header />
            <Outlet />
            <MessageBar />
        </div>
    );
};
