import { useNavigate } from "react-router";
import { TransparentButton } from "../../shared";
import { ROUTES } from "../../constants/ROUTES";

export const LoginSection = () => {
    const navigate = useNavigate();

    return (
        <section>
            <div className="container py-20 text-center flex items-center justify-center flex-wrap">
                <p className="md:flex-2 text-xl">
                    Log in to your account to save the recipes, create the shopping list and plan
                    the week
                </p>
                <div className="w-full md:flex-1 p-5 flex flex-col items-center justify-center gap-4">
                    <TransparentButton handleClick={() => navigate(ROUTES.AUTH.LOGIN)}>
                        Log in
                    </TransparentButton>
                    <TransparentButton handleClick={() => navigate(ROUTES.AUTH.SIGNUP)} filled>
                        Register
                    </TransparentButton>
                </div>
            </div>
        </section>
    );
};
