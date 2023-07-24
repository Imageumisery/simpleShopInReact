import { BrowserRouter } from "react-router-dom";
import RootRouter from "./routes/RootRouter";

function App() {
    return (
        <BrowserRouter>
            <RootRouter />
        </BrowserRouter>
    );
}

export default App;
