import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Tracker from "./pages/Tracker";
import Awareness from "./pages/Awareness";
import Diet from "./pages/Diet";
import Exercise from "./pages/Exercise";
import Symptoms from "./pages/Symptoms";
import Help from "./pages/Help";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        
  <Route path="/" element={<Dashboard />} />
  <Route path="/tracker" element={<Tracker />} />
  <Route path="/awareness" element={<Awareness />} />
  <Route path="/diet" element={<Diet />} />
  <Route path="/exercise" element={<Exercise />} />
  <Route path="/symptoms" element={<Symptoms />} />
  <Route path="/help" element={<Help />} />

      </Routes>
    </Router>
  );
}

export default App;