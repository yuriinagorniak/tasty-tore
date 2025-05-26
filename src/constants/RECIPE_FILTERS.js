export const MEAL_TYPE_FILTER = {
    title: "Meal type",
    key: "mealType",
    selectionList: [
        {
            title: "Breakfast",
            key: "breakfast",
        },
        {
            title: "Brunch",
            key: "brunch",
        },
        {
            title: "Lunch/Dinner",
            key: "lunch",
        },
        {
            title: "Snack",
            key: "snack",
        },
        {
            title: "Teatime",
            key: "teatime",
        },
    ],
};

export const DIET_TYPE_FILTER = {
    title: "Diet type",
    key: "dietType",
    selectionList: [
        {
            title: "Balanced",
            key: "balanced",
        },
        {
            title: "High fiber",
            key: "high-fiber",
        },
        {
            title: "High protein",
            key: "high-protein",
        },
        {
            title: "Low carb",
            key: "low-carb",
        },
        {
            title: "Low fat",
            key: "low-fat",
        },
        {
            title: "Low sodium",
            key: "low-sodium",
        },
    ],
};

export const HEALTH_LABELS_FILTER = {
    title: "Health",
    key: "health",
    selectionList: [
        { title: "Alcohol-Cocktail", key: "alcohol-cocktail" },
        { title: "Alcohol-Free", key: "alcohol-free" },
        { title: "Celery-Free", key: "celery-free" },
        { title: "Crustacean-Free", key: "crustacean-free" },
        { title: "Dairy-Free", key: "dairy-free" },
        { title: "DASH", key: "DASH" },
        { title: "Egg-Free", key: "egg-free" },
        { title: "Fish-Free", key: "fish-free" },
        { title: "FODMAP-Free", key: "fodmap-free" },
        { title: "Gluten-Free", key: "gluten-free" },
        { title: "Immuno-Supportive", key: "immuno-supportive" },
        { title: "Keto-Friendly", key: "keto-friendly" },
        { title: "Kidney-Friendly", key: "kidney-friendly" },
        { title: "Kosher", key: "kosher" },
        { title: "Low Potassium", key: "low-potassium" },
        { title: "Low Sugar", key: "low-sugar" },
        { title: "Lupine-Free", key: "lupine-free" },
        { title: "Mediterranean", key: "Mediterranean" },
        { title: "Mollusk-Free", key: "mollusk-free" },
        { title: "Mustard-Free", key: "mustard-free" },
        { title: "No Oil Added", key: "No-oil-added" },
        { title: "Paleo", key: "paleo" },
        { title: "Peanut-Free", key: "peanut-free" },
        { title: "Pescatarian", key: "pecatarian" },
        { title: "Pork-Free", key: "pork-free" },
        { title: "Red-Meat-Free", key: "red-meat-free" },
        { title: "Sesame-Free", key: "sesame-free" },
        { title: "Shellfish-Free", key: "shellfish-free" },
        { title: "Soy-Free", key: "soy-free" },
        { title: "Sugar-Conscious", key: "sugar-conscious" },
        { title: "Sulfite-Free", key: "sulfite-free" },
        { title: "Tree-Nut-Free", key: "tree-nut-free" },
        { title: "Vegan", key: "vegan" },
        { title: "Vegetarian", key: "vegetarian" },
        { title: "Wheat-Free", key: "wheat-free" },
    ],
};

export const RECIPE_FILTERS = [MEAL_TYPE_FILTER, DIET_TYPE_FILTER, HEALTH_LABELS_FILTER];
