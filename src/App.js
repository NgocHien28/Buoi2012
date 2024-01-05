import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ApiStudent from "./components/ApiStudent";
import Login from "./components/Login";
import ReactStr from "./components/ReactStr";
import Weather from "./components/Weather";
import Weather1 from "./components/Weather1";
import "./style.css";
import Home from "./components/Home";
import Object from "./components/Object";
import Footer from "./components/footer/Footer";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/footer" element={<Footer />} />
                    <Route path="/reactstr" element={<ReactStr />} />
                    <Route path="/object" element={<Object />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
