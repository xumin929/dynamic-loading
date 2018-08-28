
import App from '../../../../AppConfig/App';
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
      { path: '/dynamic-load-component-view/configs/components-react/CompA/v1.0.0', exact: true, component: Test }
    ]
  }
];

export default routes;