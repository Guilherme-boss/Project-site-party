import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import Services from "./pages/Services.jsx";
import Header from "./components/Header";
import Contato from "./pages/Contato";
import Rodape from "./components/Rodape";
import NotFound from "./pages/NotFound.jsx";
export default function App() {
    return (
        <Router>
          <Header />
          <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicos" element={<Services />} />
                <Route path="/contato" element={<Contato />} /> 
                <Route path="*" element={<NotFound />} /> 
            </Routes>
            </main>
            <Rodape />
        </Router>
    );
}
