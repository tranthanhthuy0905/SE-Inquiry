import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from "./screens/Menu/menu";
import CreatePage from './screens/CreatePage/CreatePage';
import ScriptBuilder from "./screens/ScriptBuilder/ScriptBuilder";
import ScriptCreate from "./screens/ScriptCreate/ScriptCreate";
import Connection from './screens/Connection/Connection';
import PreviewPage from './screens/Preview/PreviewPage';
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  return ( 
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Menu/>}/>
          <Route path="/create-page" element={<CreatePage/>}/>
          <Route path="/script-building" element={<ScriptBuilder />}/>
          <Route path="/script-creating" element={<ScriptCreate/>}/>
          <Route path="/connections" element={<Connection/>}/>
          <Route path="/preview" element={<PreviewPage/>}/>
          
        </Routes>
      </Router>
    </Provider>
  );
}
export default App;
//<Provider store={store}>
//<Route path="/preview" element={<PreviewPage/>}/>