import { TransparentButton, PageBanner } from "../shared";
import { useUser } from "../hooks/useUser";
import { UpdateUserDetailsForm } from "../components";

export const Dashboard = () => {
    const { user, handleLogout } = useUser();
    return (
        <>
            <PageBanner pageTitle={`Welcome back, ${user.displayName || user.email}`} />
            <UpdateUserDetailsForm />  
            <div className="container flex items-center justify-center pt-10">
                <div className="w-[200px]">
                    <TransparentButton handleClick={handleLogout}>Log out</TransparentButton>
                </div>
            </div>
        </>
    );
};
