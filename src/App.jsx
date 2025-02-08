import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TypeSprintEvaluationRound1 from "./components/TypeSprintEvaluationRound1";
import TypeSprintEvaluationRound2 from "./components/TypeSprintEvaluationRound2";
import FinalRound from "./components/Finalround"; // Check file case
import Home from "./components/Home"; // Check file case

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/round1" element={<TypeSprintEvaluationRound1 />} />
          <Route path="/round2" element={<TypeSprintEvaluationRound2 />} />
          <Route path="/final" element={<FinalRound />} />
          <Route path="*" element={<div className="text-center p-10 text-xl">404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
