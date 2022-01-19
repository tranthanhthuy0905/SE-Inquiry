// import Menu from "./screens/Menu/menu";
// import CreatePage from './screens/CreatePage/CreatePage';
// import ScriptBuilder from "./screens/ScriptBuilder/ScriptBuilder";
// import { useRoutes } from 'react-router-dom'
// import Connection from './screens/Connection/Connection';
// import PreviewPage from './screens/Preview/PreviewPage';
// import IndvPage from "./screens/IndvPage/IndvPage";
// import YourList from './screens/YourList/YourList';

// const routes = useRoutes([
//     { path: '/', element: <Menu /> },
//     {
//       path: '/script-building',
//       element: <ScriptBuilder />,
//       children: [
//         { path: '/create-page', element: <CreatePage/> }
//       ]
//     },
//     {
//       path: '/your-list',
//       element: <YourList/>,
//       children: [
//         { path: '/individual', 
//           element: <IndvPage />,
//         children: [
//           { path: '/preview', element: <PreviewPage /> },
//         ]}
//       ]
//     },
//     {
//       path: '/connections',
//       element: <Connection />
//     }
//   ])
// export default routes;