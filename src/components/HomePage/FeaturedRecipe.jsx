import { PlateIcon } from "../../shared/icons";
import FeaturedRecipeBg from "../../assets/HomePage/featured-recipe-bg.jpg";
import { RecipeCard } from "../../shared";

export const FeaturedRecipe = () => {
    const today = new Date();
    const dayName = today.toLocaleDateString("en-US", { weekday: "long" }).toUpperCase();

    return (
        <section
            className="bg-no-repeat bg-cover bg-right "
            style={{ backgroundImage: `url(${FeaturedRecipeBg})` }}
        >
            <div className="container pt-[120px] pb-[120px] flex justify-between items-center">
                <div className="flex flex-col items-center w-[40%] gap-10">
                    <div className="lg:w-[180px] lg:h-[180px] 2xl:w-[200px] 2xl:h-[200px]">
                        <PlateIcon />
                    </div>
                    <h3 className="lg:text-4xl xl:text-5xl font-bold text-white xl:w-[100%] 2xl:w-[80%] text-center">
                        SAVOUR THE <span className="text-(--primary-text-color)">{dayName}</span>{" "}
                        SPECIAL
                    </h3>
                </div>
                <div className="2xl:w-[40%] flex justify-end">
                    <div className="w-[425px] h-[265px]">
                        <RecipeCard
                            data={{
                                recipe: {
                                    label: "Egg Tortellini Pasta",
                                    image: "https://edamam-product-images.s3.amazonaws.com/web-img/de1/de189f34dbd5c0345599580e1059b866.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDiGiMxh2b%2F843BS38t8wcFe%2B9p3PXLu4jWAB7QzGosSwIgem1rAFjuA%2B7eLR1i00SeDn5Kw9qXJL5SNawsMM7Fwd8qwQUI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDAw6Djj2tInI1C3ItCqVBdusGLJd%2FZtzSEPPARdOBChfwfiDs7L5rZJuZKNQlNi0JEiOvNivwNURisHKoeaVSsTG58NPAe%2F9TYC7dAT6Ve2F%2Bhcft%2F9uoG18ZmLrnaSS3qXgsS69lCUvR1XKfXVFFS2%2Bnovzgr3dvH%2FFSEgQ4%2By3sKjDdb80aqU9rxdl5nqW9TjCwwaNPQBN%2BWGuyIbCPshrZ9xqteylyzjk5J2K71SMPfqQPaEWndFZTfDtb6iaoRqAcDQOS3%2F%2BICa7OREXEXbCAlpjNHUA7OFgQ%2BkXMnH8KVXGJeQ8Fibnwhf6aFUJwrQsBzUaLhnx9tamrxxqE6lXCGcmtt2fJAGCHtIeMSPaqKc4NxXngijU5jwyVENBs5pI38UmYFT8BwmAbcvUwvBU2Ui7URfVRZXsbPyLOtRlAHxFkbqOL4OBvoIA5dJcGROgz8sTAyVlWRrrDzKH8c2jm%2Bfl5VFi8ubwP4UyX0v35%2BaGD%2FvXk2W66wQMgbZYAXvgDElEwk%2FUGNMn8zY2TU9Hxc763dxSMM8pE7kmxDbwUiJ5PIMrcKUxZyf2%2FKoFxtZcnK%2FXi8cf9h%2B3DTjc%2Bf93KIG2VeKWAgKXkr6L6%2B%2FRqm7sFd%2FJP797p0U%2F9biUWach0JGMeM2y1KcUXwN9IWfR6xX4wetbnIgevXxm8eFcAQ8xsZhfhJQ8EY0whTQcPgFeBt%2BvU%2BCcL%2F1e09%2Ftfkn2sGQRuiBiPCjQRjlZ1om0TQwsf3lRdg5CJgfqCi%2BYhh%2FDBLwPDiN%2BBiTmFz7Qy01wmeZCHlKkhMTaQ5IrM3TVoJinBNkajHzPlYzk1GyV2eAuNtGVlJiPYpLJHPz5SDRTJsuQFnhdTP6wqiZStf7P8S6eJ0sBQGlG58tWFPfDUDpC0jIwmN2FvwY6sQHQyJiJ%2FHxHNs%2FdOZxgb1AJYU%2FDdcd2C8do8%2BeeaOTS4B6iGRbLvyH96egEkj%2Fq7mlm4nVzSzHYjqpOZT1s3wk2eq5%2BttxeZMY%2BmqwcSnvv3%2BbO%2FpzNGEPiQ64EFb3JBdFz7P4wbKeeW5dLOMbhOnF%2BhhCN7sSdC0dH1JQ2cnfZXyvzmLSUnAPXHtBOyAMNub%2BrUA7VYLcetU16mi%2Bt3xpNNPBk3Sz67I3ektAM7ffNTbs%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250324T153929Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFN6DPV7WI%2F20250324%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=148478e2bf5a158b97b9eadb21f2fb617e4425d51d6e995d3e6707ce578d00a3",
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
