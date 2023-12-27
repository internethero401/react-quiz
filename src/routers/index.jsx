import { BrowserRouter, Routes, Route } from "react-router-dom";
import Correct from "../components/Correct";
import Start from "../components/Start";
import Miss from "../components/Miss";

const Rooter = () => {
    return(
        <BrowserRouter>
             <Routes>
                <Route path="/" element={<Start/>} /> {/* 👈 Renders at /app/ */}
                <Route path="/correct" element={<Correct />} />
                <Route path="/miss" element={<Miss />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Rooter;