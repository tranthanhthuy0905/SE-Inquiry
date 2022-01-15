import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from "./screens/Menu/menu";
import CreatePage from './screens/CreatePage/CreatePage';
import ScriptBuilder from "./screens/ScriptBuilder/ScriptBuilder";
import ScriptCreate from "./screens/ScriptCreate/ScriptCreate";
import Connection from './screens/Connection/Connection';
import PreviewPage from './screens/Preview/PreviewPage';
import {Provider} from 'react-redux';
import store from './redux/store';
import IndvPage from "./screens/IndvPage/IndvPage";
import YourList from './screens/YourList/YourList';
import PreviewFake from './screens/Preview/PreviewFake';

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
          <Route path="/individual" element={<IndvPage />}/>
          <Route path="/your-list" element={<YourList/>}/>
          <Route path="/preview-fake" element={<PreviewFake />}/>
        </Routes>
      </Router>
    </Provider>
  );
}
export default App;
//<Provider store={store}>
//<Route path="/preview" element={<PreviewPage/>}/>
