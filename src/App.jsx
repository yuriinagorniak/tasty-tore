import { AppRouter } from "./routes/AppRouter";
import { BrowserRouter as Router } from "react-router";
import { AppProviders } from "./contexts";
import { ScrollToTop } from "./pages";
import { AuthContextProvider } from "./contexts";

function App() {
    return (
        <>
            <Router>
                <AuthContextProvider>
                    <ScrollToTop />
                    <AppProviders>
                        <AppRouter />
                    </AppProviders>
                </AuthContextProvider>
            </Router>
        </>
    );
}

export default App;
