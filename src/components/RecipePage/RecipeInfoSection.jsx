import { InfoTag } from "../../shared";

export const RecipeInfoSection = ({ recipe = {}, dataKey = null, label = "Info" }) => {
    return (
        <>
            {recipe && recipe[dataKey] && (
                <section className="w-full flex flex-col justify-center items-center my-10 gap-4">
                    <h3 className="text-2xl font-bold">{label}</h3>
                    <ul className="flex w-[70%] flex-wrap justify-center items-center gap-1">
                        {recipe[dataKey].map((title) => (
                            <li key={title}>
                                <InfoTag label={title} />
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </>
    );
};
