import { AppRouter } from "./routes/AppRouter";
import { BrowserRouter as Router } from "react-router";
import {
    ShoppingListContextProvider,
    RecipeContextProvider,
    SavedRecipesContextProvider,
} from "./contexts";
import { ScrollToTop } from "./pages";

function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <RecipeContextProvider>
                    <SavedRecipesContextProvider>
                        <ShoppingListContextProvider>
                            <AppRouter />
                        </ShoppingListContextProvider>
                    </SavedRecipesContextProvider>
                </RecipeContextProvider>
            </Router>
        </>
    );
}

export default App;