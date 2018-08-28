
import App from '../../../components-react/App/App';
import Test from '../Container/Test';

// import ConfigApp from '../../config/ConfigApp/App';
// import Config from '../../config/Container/Config';
const routes = [
  
  // {
  //   component: ConfigApp,
  //   exact: true, 
  //   path:"/dynamic-load-component-view/react-demo/config",
  //   routes: [
  //     { path: '/dynamic-load-component-view/react-demo/config', exact: true, component: Config }
  //   ]
  // },
  {
    component: App,
    exact: true, 
    routes: [
      { path: '/dynamic-load-component-view/react-demo/list', exact: true, component: Test }
    ]
  }
];

export default routes;