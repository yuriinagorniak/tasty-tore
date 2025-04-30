import { AppRouter } from "./routes/AppRouter";
import { BrowserRouter as Router } from "react-router";
import { AppProviders } from "./contexts";
import { ScrollToTop } from "./pages";

function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <AppProviders>
                    <AppRouter />
                </AppProviders>
            </Router>
        </>
    );
}

export default App;
