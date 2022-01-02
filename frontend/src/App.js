import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from "./screens/Menu/menu";
import CreatePage from './screens/CreatePage/CreatePage';
import ScriptBuilder from "./screens/ScriptBuilder/ScriptBuilder";
import ScriptCreate from "./screens/ScriptCreate/ScriptCreate";
import Connection from './screens/Connection/Connection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main-menu" element={<Menu/>}/>
        <Route path="/create-page" element={<CreatePage/>}/>
        <Route path="/script-building" element={<ScriptBuilder />}/>
        <Route path="/script-creating" element={<ScriptCreate/>}/>
        <Route path="/connections" element={<Connection/>}/>
      </Routes>
    </Router>
  );
}

export default App;
