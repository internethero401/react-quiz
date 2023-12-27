import { BrowserRouter, Routes, Route } from "react-router-dom";
import Correct from "../components/Correct";
import Start from "../components/Start";
import Miss from "../components/Miss";
import Question from "../components/Question";

const Rooter = () => {
    return(
        <BrowserRouter>
             <Routes>
                <Route path="/" element={<Start />} /> {/* 👈 Renders at /app/ */}
                <Route path="/correct" element={<Correct />} />
                <Route path="/miss" element={<Miss />} />
                <Route path="/question" element={<Question />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Rooter;