import { BrowserRouter } from "react-router-dom";
import RootRouter from "./routes/RootRouter";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <RootRouter />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
