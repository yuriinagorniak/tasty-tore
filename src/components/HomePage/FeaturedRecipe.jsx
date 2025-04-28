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
                                    uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_aa213d72dfba4dc4a5d2d0ea0994e01a",
                                    label: "Egg Tortellini Pasta With Maggi Masala-E-Magic",
                                    image: "https://edamam-product-images.s3.amazonaws.com/web-img/de1/de189f34dbd5c0345599580e1059b866.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIE%2FEJ1mvxuTHfLdL4abDakD2mxhGHy5JqvNqhCXH8eyEAiAnNmlS5qr2bhJceermblqun15T2BEe2X7rDGy97YJXmyq5BQhgEAAaDDE4NzAxNzE1MDk4NiIMDvb2lqCUbcSarWJSKpYFqKskHcKWqkQ5cMCzmZ8p1jvAMWDVwHOzHGjp3kST7QKrYFEIoxBPX0B%2B1hEqvMk4cDDJuEsfglgTYVE4vCByvjVffYRvoip5H1gpjeyPVPakkYOMH6VTPVRWi%2FrR7C6Lggh84aV%2Fwa8OSmrJKYCQ0JOg2ekolCXBYjjw4lKtF2Btm9ojr%2B2Q9Xhbtl9qrVawJOFMcDyx1EMxd5n1FYZu2qRaM2E9GhIhMa98cE4N2kX4GLm52ql5zYGNdVSXpAqdX4yoGV3wSq5IJxXNAD3OyYtwALQW0zM1mM0BoWOLwHJCGjO90%2FiIPqnhEsHa8SD0GwHz2b7aXPEexEcpC9irDDwow8IXPofc%2BZeTNSKRXTDJclRC%2BVRYeq7m3jmLz%2B%2BT2hr5DTpWK2CAEwY0VUtgmCTLS8SZyqtv9Goe2w6cKIqa2jm0q2Efwpnsy5VdFOhAYMsldryaDCvSJYDYM0tUZaRCDPOvWmEkxs%2Fu60Z38%2BDPu79Zcc3RxnhozZCxp2ut5cglBh%2BsjZejl0JtNVQGrUiI9m2R3HMHxDvdA2CvLIPWvctW72hWrahypOjP1%2BrvJVzeXbzzh9GwYeGylp5z%2FxCi1MPyGhqC8rHIOh6%2F5gwH4CEnvx3kR1sj5ScZ2OhtUndRFeH7jqkOQZpqL%2FTCiiURIluSxQr04uCIe0vt2Xqn5akNVx26ACpsKn1tsYBUPcCQSD64OzMcB4pqQb%2BQtOB5Z33SjHQPL1G1WNxjw3hI8tC8UmdOM5ISIohA4AFInp1hYdAISenKjh1EQF469CTIl5m6o3RjfVHw6ELvtyE2RWyKec62aHYuAGWryQsgR0P1ZxVAt1QzSMoQ15mePl7min%2Bm7e2R9tQMDsNX8AWecICYydIwjLaEwAY6sgG3xnP3JIFtLISWx2LrX2L3xvo0UaX2FEp6O3TjT1wH3OqereaitC56iKhYSn9v7mJqb8SPZY%2FNIZ7LaRPsCvi6hyw3B11O5TsrfB%2FKq8IHxYB7CQBBaStYrLvDD6NwlTbcwU5KIQLUz3Wiv4fRy1QLLcMWeqXQhg0g52d%2FzSaGKbAzNavpnnNCFQktK4Nsy9nRquDf0HB0wley86XMMxSUU4gLkB3s%2Blisl0Ber3WknHNG&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250417T162122Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK4QFILOD%2F20250417%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8c4fba2f43faf8d4964dc716cd9f0b7c909757ac7d83c31449c4d69aba9fbf39",
                                    images: {
                                        THUMBNAIL: {
                                            url: "https://edamam-product-images.s3.amazonaws.com/web-img/de1/de189f34dbd5c0345599580e1059b866-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIE%2FEJ1mvxuTHfLdL4abDakD2mxhGHy5JqvNqhCXH8eyEAiAnNmlS5qr2bhJceermblqun15T2BEe2X7rDGy97YJXmyq5BQhgEAAaDDE4NzAxNzE1MDk4NiIMDvb2lqCUbcSarWJSKpYFqKskHcKWqkQ5cMCzmZ8p1jvAMWDVwHOzHGjp3kST7QKrYFEIoxBPX0B%2B1hEqvMk4cDDJuEsfglgTYVE4vCByvjVffYRvoip5H1gpjeyPVPakkYOMH6VTPVRWi%2FrR7C6Lggh84aV%2Fwa8OSmrJKYCQ0JOg2ekolCXBYjjw4lKtF2Btm9ojr%2B2Q9Xhbtl9qrVawJOFMcDyx1EMxd5n1FYZu2qRaM2E9GhIhMa98cE4N2kX4GLm52ql5zYGNdVSXpAqdX4yoGV3wSq5IJxXNAD3OyYtwALQW0zM1mM0BoWOLwHJCGjO90%2FiIPqnhEsHa8SD0GwHz2b7aXPEexEcpC9irDDwow8IXPofc%2BZeTNSKRXTDJclRC%2BVRYeq7m3jmLz%2B%2BT2hr5DTpWK2CAEwY0VUtgmCTLS8SZyqtv9Goe2w6cKIqa2jm0q2Efwpnsy5VdFOhAYMsldryaDCvSJYDYM0tUZaRCDPOvWmEkxs%2Fu60Z38%2BDPu79Zcc3RxnhozZCxp2ut5cglBh%2BsjZejl0JtNVQGrUiI9m2R3HMHxDvdA2CvLIPWvctW72hWrahypOjP1%2BrvJVzeXbzzh9GwYeGylp5z%2FxCi1MPyGhqC8rHIOh6%2F5gwH4CEnvx3kR1sj5ScZ2OhtUndRFeH7jqkOQZpqL%2FTCiiURIluSxQr04uCIe0vt2Xqn5akNVx26ACpsKn1tsYBUPcCQSD64OzMcB4pqQb%2BQtOB5Z33SjHQPL1G1WNxjw3hI8tC8UmdOM5ISIohA4AFInp1hYdAISenKjh1EQF469CTIl5m6o3RjfVHw6ELvtyE2RWyKec62aHYuAGWryQsgR0P1ZxVAt1QzSMoQ15mePl7min%2Bm7e2R9tQMDsNX8AWecICYydIwjLaEwAY6sgG3xnP3JIFtLISWx2LrX2L3xvo0UaX2FEp6O3TjT1wH3OqereaitC56iKhYSn9v7mJqb8SPZY%2FNIZ7LaRPsCvi6hyw3B11O5TsrfB%2FKq8IHxYB7CQBBaStYrLvDD6NwlTbcwU5KIQLUz3Wiv4fRy1QLLcMWeqXQhg0g52d%2FzSaGKbAzNavpnnNCFQktK4Nsy9nRquDf0HB0wley86XMMxSUU4gLkB3s%2Blisl0Ber3WknHNG&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250417T162122Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK4QFILOD%2F20250417%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=75d22bde4096f1582a59c0d039288da1996a46fe8c20612ea785cdbc11a5e99e",
                                            width: 100,
                                            height: 100,
                                        },
                                        SMALL: {
                                            url: "https://edamam-product-images.s3.amazonaws.com/web-img/de1/de189f34dbd5c0345599580e1059b866-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIE%2FEJ1mvxuTHfLdL4abDakD2mxhGHy5JqvNqhCXH8eyEAiAnNmlS5qr2bhJceermblqun15T2BEe2X7rDGy97YJXmyq5BQhgEAAaDDE4NzAxNzE1MDk4NiIMDvb2lqCUbcSarWJSKpYFqKskHcKWqkQ5cMCzmZ8p1jvAMWDVwHOzHGjp3kST7QKrYFEIoxBPX0B%2B1hEqvMk4cDDJuEsfglgTYVE4vCByvjVffYRvoip5H1gpjeyPVPakkYOMH6VTPVRWi%2FrR7C6Lggh84aV%2Fwa8OSmrJKYCQ0JOg2ekolCXBYjjw4lKtF2Btm9ojr%2B2Q9Xhbtl9qrVawJOFMcDyx1EMxd5n1FYZu2qRaM2E9GhIhMa98cE4N2kX4GLm52ql5zYGNdVSXpAqdX4yoGV3wSq5IJxXNAD3OyYtwALQW0zM1mM0BoWOLwHJCGjO90%2FiIPqnhEsHa8SD0GwHz2b7aXPEexEcpC9irDDwow8IXPofc%2BZeTNSKRXTDJclRC%2BVRYeq7m3jmLz%2B%2BT2hr5DTpWK2CAEwY0VUtgmCTLS8SZyqtv9Goe2w6cKIqa2jm0q2Efwpnsy5VdFOhAYMsldryaDCvSJYDYM0tUZaRCDPOvWmEkxs%2Fu60Z38%2BDPu79Zcc3RxnhozZCxp2ut5cglBh%2BsjZejl0JtNVQGrUiI9m2R3HMHxDvdA2CvLIPWvctW72hWrahypOjP1%2BrvJVzeXbzzh9GwYeGylp5z%2FxCi1MPyGhqC8rHIOh6%2F5gwH4CEnvx3kR1sj5ScZ2OhtUndRFeH7jqkOQZpqL%2FTCiiURIluSxQr04uCIe0vt2Xqn5akNVx26ACpsKn1tsYBUPcCQSD64OzMcB4pqQb%2BQtOB5Z33SjHQPL1G1WNxjw3hI8tC8UmdOM5ISIohA4AFInp1hYdAISenKjh1EQF469CTIl5m6o3RjfVHw6ELvtyE2RWyKec62aHYuAGWryQsgR0P1ZxVAt1QzSMoQ15mePl7min%2Bm7e2R9tQMDsNX8AWecICYydIwjLaEwAY6sgG3xnP3JIFtLISWx2LrX2L3xvo0UaX2FEp6O3TjT1wH3OqereaitC56iKhYSn9v7mJqb8SPZY%2FNIZ7LaRPsCvi6hyw3B11O5TsrfB%2FKq8IHxYB7CQBBaStYrLvDD6NwlTbcwU5KIQLUz3Wiv4fRy1QLLcMWeqXQhg0g52d%2FzSaGKbAzNavpnnNCFQktK4Nsy9nRquDf0HB0wley86XMMxSUU4gLkB3s%2Blisl0Ber3WknHNG&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250417T162122Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK4QFILOD%2F20250417%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3f15f2e4194c27fc39cc6789081e3be5adc8a8102a39632cfdaab0d797a41f52",
                                            width: 200,
                                            height: 200,
                                        },
                                        REGULAR: {
                                            url: "https://edamam-product-images.s3.amazonaws.com/web-img/de1/de189f34dbd5c0345599580e1059b866.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIE%2FEJ1mvxuTHfLdL4abDakD2mxhGHy5JqvNqhCXH8eyEAiAnNmlS5qr2bhJceermblqun15T2BEe2X7rDGy97YJXmyq5BQhgEAAaDDE4NzAxNzE1MDk4NiIMDvb2lqCUbcSarWJSKpYFqKskHcKWqkQ5cMCzmZ8p1jvAMWDVwHOzHGjp3kST7QKrYFEIoxBPX0B%2B1hEqvMk4cDDJuEsfglgTYVE4vCByvjVffYRvoip5H1gpjeyPVPakkYOMH6VTPVRWi%2FrR7C6Lggh84aV%2Fwa8OSmrJKYCQ0JOg2ekolCXBYjjw4lKtF2Btm9ojr%2B2Q9Xhbtl9qrVawJOFMcDyx1EMxd5n1FYZu2qRaM2E9GhIhMa98cE4N2kX4GLm52ql5zYGNdVSXpAqdX4yoGV3wSq5IJxXNAD3OyYtwALQW0zM1mM0BoWOLwHJCGjO90%2FiIPqnhEsHa8SD0GwHz2b7aXPEexEcpC9irDDwow8IXPofc%2BZeTNSKRXTDJclRC%2BVRYeq7m3jmLz%2B%2BT2hr5DTpWK2CAEwY0VUtgmCTLS8SZyqtv9Goe2w6cKIqa2jm0q2Efwpnsy5VdFOhAYMsldryaDCvSJYDYM0tUZaRCDPOvWmEkxs%2Fu60Z38%2BDPu79Zcc3RxnhozZCxp2ut5cglBh%2BsjZejl0JtNVQGrUiI9m2R3HMHxDvdA2CvLIPWvctW72hWrahypOjP1%2BrvJVzeXbzzh9GwYeGylp5z%2FxCi1MPyGhqC8rHIOh6%2F5gwH4CEnvx3kR1sj5ScZ2OhtUndRFeH7jqkOQZpqL%2FTCiiURIluSxQr04uCIe0vt2Xqn5akNVx26ACpsKn1tsYBUPcCQSD64OzMcB4pqQb%2BQtOB5Z33SjHQPL1G1WNxjw3hI8tC8UmdOM5ISIohA4AFInp1hYdAISenKjh1EQF469CTIl5m6o3RjfVHw6ELvtyE2RWyKec62aHYuAGWryQsgR0P1ZxVAt1QzSMoQ15mePl7min%2Bm7e2R9tQMDsNX8AWecICYydIwjLaEwAY6sgG3xnP3JIFtLISWx2LrX2L3xvo0UaX2FEp6O3TjT1wH3OqereaitC56iKhYSn9v7mJqb8SPZY%2FNIZ7LaRPsCvi6hyw3B11O5TsrfB%2FKq8IHxYB7CQBBaStYrLvDD6NwlTbcwU5KIQLUz3Wiv4fRy1QLLcMWeqXQhg0g52d%2FzSaGKbAzNavpnnNCFQktK4Nsy9nRquDf0HB0wley86XMMxSUU4gLkB3s%2Blisl0Ber3WknHNG&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250417T162122Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK4QFILOD%2F20250417%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8c4fba2f43faf8d4964dc716cd9f0b7c909757ac7d83c31449c4d69aba9fbf39",
                                            width: 300,
                                            height: 300,
                                        },
                                        LARGE: {
                                            url: "https://edamam-product-images.s3.amazonaws.com/web-img/de1/de189f34dbd5c0345599580e1059b866-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIE%2FEJ1mvxuTHfLdL4abDakD2mxhGHy5JqvNqhCXH8eyEAiAnNmlS5qr2bhJceermblqun15T2BEe2X7rDGy97YJXmyq5BQhgEAAaDDE4NzAxNzE1MDk4NiIMDvb2lqCUbcSarWJSKpYFqKskHcKWqkQ5cMCzmZ8p1jvAMWDVwHOzHGjp3kST7QKrYFEIoxBPX0B%2B1hEqvMk4cDDJuEsfglgTYVE4vCByvjVffYRvoip5H1gpjeyPVPakkYOMH6VTPVRWi%2FrR7C6Lggh84aV%2Fwa8OSmrJKYCQ0JOg2ekolCXBYjjw4lKtF2Btm9ojr%2B2Q9Xhbtl9qrVawJOFMcDyx1EMxd5n1FYZu2qRaM2E9GhIhMa98cE4N2kX4GLm52ql5zYGNdVSXpAqdX4yoGV3wSq5IJxXNAD3OyYtwALQW0zM1mM0BoWOLwHJCGjO90%2FiIPqnhEsHa8SD0GwHz2b7aXPEexEcpC9irDDwow8IXPofc%2BZeTNSKRXTDJclRC%2BVRYeq7m3jmLz%2B%2BT2hr5DTpWK2CAEwY0VUtgmCTLS8SZyqtv9Goe2w6cKIqa2jm0q2Efwpnsy5VdFOhAYMsldryaDCvSJYDYM0tUZaRCDPOvWmEkxs%2Fu60Z38%2BDPu79Zcc3RxnhozZCxp2ut5cglBh%2BsjZejl0JtNVQGrUiI9m2R3HMHxDvdA2CvLIPWvctW72hWrahypOjP1%2BrvJVzeXbzzh9GwYeGylp5z%2FxCi1MPyGhqC8rHIOh6%2F5gwH4CEnvx3kR1sj5ScZ2OhtUndRFeH7jqkOQZpqL%2FTCiiURIluSxQr04uCIe0vt2Xqn5akNVx26ACpsKn1tsYBUPcCQSD64OzMcB4pqQb%2BQtOB5Z33SjHQPL1G1WNxjw3hI8tC8UmdOM5ISIohA4AFInp1hYdAISenKjh1EQF469CTIl5m6o3RjfVHw6ELvtyE2RWyKec62aHYuAGWryQsgR0P1ZxVAt1QzSMoQ15mePl7min%2Bm7e2R9tQMDsNX8AWecICYydIwjLaEwAY6sgG3xnP3JIFtLISWx2LrX2L3xvo0UaX2FEp6O3TjT1wH3OqereaitC56iKhYSn9v7mJqb8SPZY%2FNIZ7LaRPsCvi6hyw3B11O5TsrfB%2FKq8IHxYB7CQBBaStYrLvDD6NwlTbcwU5KIQLUz3Wiv4fRy1QLLcMWeqXQhg0g52d%2FzSaGKbAzNavpnnNCFQktK4Nsy9nRquDf0HB0wley86XMMxSUU4gLkB3s%2Blisl0Ber3WknHNG&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250417T162122Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK4QFILOD%2F20250417%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a9c12b7d837a229759300292fc934632d1c87aeefbe48f2bec46e141a8201464",
                                            width: 600,
                                            height: 600,
                                        },
                                    },
                                    source: "Food52",
                                    url: "https://food52.com/recipes/71702-egg-tortellini-pasta-with-maggi-masala-e-magic",
                                    shareAs:
                                        "http://www.edamam.com/recipe/egg-tortellini-pasta-with-maggi-masala-e-magic-aa213d72dfba4dc4a5d2d0ea0994e01a/egg+tortellini+pasta",
                                    yield: 2.0,
                                    dietLabels: ["Balanced", "High-Fiber"],
                                    healthLabels: [
                                        "Peanut-Free",
                                        "Tree-Nut-Free",
                                        "Fish-Free",
                                        "Shellfish-Free",
                                        "Pork-Free",
                                        "Crustacean-Free",
                                        "Celery-Free",
                                        "Mustard-Free",
                                        "Sesame-Free",
                                        "Lupine-Free",
                                        "Mollusk-Free",
                                        "Alcohol-Free",
                                        "Sulfite-Free",
                                        "Kosher",
                                    ],
                                    cautions: ["Sulfites"],
                                    ingredientLines: [
                                        "1 cup Tortellini Pasta",
                                        "2 Hard boiled eggs",
                                        "1 medium sized onion, roughly cut in big chunks",
                                        "1 medium sized capsicum, roughly cut in big chunks",
                                        "1/2 cup cup sweet corn",
                                        "1 1/2 tablespoons maggi masala-e-magic (One small pack rs5",
                                        "1 tablespoon dried parsley",
                                        "1/2 tablespoon chili flakes",
                                        "1 tablespoon white vinegar",
                                        "2 tablespoons extra virgin olive oil (or more to drizzle on top)",
                                        "Salt to taste",
                                        "Parsley for garnish",
                                    ],
                                    ingredients: [
                                        {
                                            text: "1 cup Tortellini Pasta",
                                            quantity: 1.0,
                                            measure: "cup",
                                            food: "Pasta",
                                            weight: 105.0,
                                            foodCategory: "grains",
                                            foodId: "food_a8hs60uayl5icia1qe8qoba1kwp8",
                                            image: "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg",
                                        },
                                        {
                                            text: "2 Hard boiled eggs",
                                            quantity: 2.0,
                                            measure: "<unit>",
                                            food: "Hard boiled eggs",
                                            weight: 80.0,
                                            foodCategory: "Eggs",
                                            foodId: "food_a2y52zfbr22uq1ah5thnqac607ft",
                                            image: "https://www.edamam.com/food-img/e54/e54c012fabed0f9cf211a817d1e23c5c.jpg",
                                        },
                                        {
                                            text: "1 medium sized onion, roughly cut in big chunks",
                                            quantity: 1.0,
                                            measure: "<unit>",
                                            food: "onion",
                                            weight: 110.0,
                                            foodCategory: "vegetables",
                                            foodId: "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                                            image: "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg",
                                        },
                                        {
                                            text: "1 medium sized capsicum, roughly cut in big chunks",
                                            quantity: 1.0,
                                            measure: "<unit>",
                                            food: "capsicum",
                                            weight: 119.0,
                                            foodCategory: "vegetables",
                                            foodId: "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
                                            image: "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg",
                                        },
                                        {
                                            text: "1/2 cup cup sweet corn",
                                            quantity: 1.0,
                                            measure: "cup",
                                            food: "sweet corn",
                                            weight: 145.0,
                                            foodCategory: "vegetables",
                                            foodId: "food_b4wvre6b14mmkpaa22d8ybup8q51",
                                            image: "https://www.edamam.com/food-img/eb5/eb5e11afb9f697720b2de2e0e0e27d8d.jpg",
                                        },
                                        {
                                            text: "1 1/2 tablespoons maggi masala-e-magic (One small pack rs5",
                                            quantity: 1.5,
                                            measure: "tablespoon",
                                            food: "masala",
                                            weight: 9.0,
                                            foodCategory: "Condiments and sauces",
                                            foodId: "food_agzj5h2awog3dqaup3jksbvrc6xa",
                                            image: "https://www.edamam.com/food-img/c3f/c3f96d47d334b92f0120ff0b3a512ec3.jpg",
                                        },
                                        {
                                            text: "1 tablespoon dried parsley",
                                            quantity: 1.0,
                                            measure: "tablespoon",
                                            food: "dried parsley",
                                            weight: 1.6,
                                            foodCategory: "Condiments and sauces",
                                            foodId: "food_a5oe5hianlpew5bik62kxb25wpjt",
                                            image: "https://www.edamam.com/food-img/e45/e453e0756d9ebe39fbcdae1594587ae1.jpg",
                                        },
                                        {
                                            text: "1/2 tablespoon chili flakes",
                                            quantity: 0.5,
                                            measure: "tablespoon",
                                            food: "chili",
                                            weight: 3.281249999944524,
                                            foodCategory: "vegetables",
                                            foodId: "food_akybxs9atrgwona5nz3jgbo3vor5",
                                            image: "https://www.edamam.com/food-img/e3d/e3d161d6cfe5ef287053aed5461738ba.jpg",
                                        },
                                        {
                                            text: "1 tablespoon white vinegar",
                                            quantity: 1.0,
                                            measure: "tablespoon",
                                            food: "white vinegar",
                                            weight: 14.9,
                                            foodCategory: "Condiments and sauces",
                                            foodId: "food_am3vwadag9arxtadrwyfcau2w3b2",
                                            image: "https://www.edamam.com/food-img/5f6/5f69b84c399d778c4728e9ab4f8065a2.jpg",
                                        },
                                        {
                                            text: "2 tablespoons extra virgin olive oil (or more to drizzle on top)",
                                            quantity: 2.0,
                                            measure: "tablespoon",
                                            food: "extra virgin olive oil",
                                            weight: 27.0,
                                            foodCategory: "Oils",
                                            foodId: "food_b1d1icuad3iktrbqby0hiagafaz7",
                                            image: "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg",
                                        },
                                        {
                                            text: "Salt to taste",
                                            quantity: 0.0,
                                            measure: null,
                                            food: "Salt",
                                            weight: 3.6886874999996673,
                                            foodCategory: "Condiments and sauces",
                                            foodId: "food_btxz81db72hwbra2pncvebzzzum9",
                                            image: "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg",
                                        },
                                        {
                                            text: "Parsley for garnish",
                                            quantity: 0.0,
                                            measure: null,
                                            food: "Parsley",
                                            weight: 6.1478124999994455,
                                            foodCategory: "vegetables",
                                            foodId: "food_b244pqdazw24zobr5vqu2bf0uid8",
                                            image: "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg",
                                        },
                                    ],
                                    calories: 986.157212499982,
                                    totalCO2Emissions: 1091.9731775182836,
                                    co2EmissionsClass: "D",
                                    totalWeight: 624.2506532635068,
                                    totalTime: 0.0,
                                    cuisineType: ["italian"],
                                    mealType: ["lunch/dinner"],
                                    dishType: ["main course"],
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
