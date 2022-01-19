import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
//import routes from './routes';

import Menu from "./screens/Menu/menu";
import CreatePage from './screens/CreatePage/CreatePage';
import ScriptBuilder from "./screens/ScriptBuilder/ScriptBuilder";
import Connection from './screens/Connection/Connection';
import PreviewPage from './screens/Preview/PreviewPage';
import IndvPage from "./screens/IndvPage/IndvPage";
import YourList from './screens/YourList/YourList';

function App() {
  return ( 
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Menu/>}/>
            <Route path='/script' element={<ScriptBuilder/>}/>
              <Route path='/create-page' element={<CreatePage/>}/>
            <Route path='/connections' element={<Connection/>}/>
            <Route path='/your-list' element={<YourList/>}/>
              <Route path='/individual' element={<IndvPage/>}/>
                <Route path='/preview' element={<PreviewPage/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}
export default App;
