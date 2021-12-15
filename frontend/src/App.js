import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ScriptBuilder from "./screens/ScriptBuilder/ScriptBuilder";
import ScriptCreate from "./screens/ScriptCreate/ScriptCreate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/script-building" element={<ScriptBuilder />}/>
        <Route path="/script-creating" element={<ScriptCreate/>}/>
      </Routes>
    </Router>
  );
}

export default App;
