import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ReactStr from "./components/ReactStr";
import "./style.css";
import Home from "./components/Home";
import Object from "./components/Object";
import Footer from "./components/footer/Footer";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";
import Product from "./components/Product";
import Products from "./components/Products";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/* <Route index element={<Home />} /> */}
                    <Route index element={<Products />} />
                    <Route path="/footer" element={<Footer />} />
                    <Route path="/reactstr" element={<ReactStr />} />
                    <Route path="/object" element={<Object />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/product/:id" element={<Product />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
