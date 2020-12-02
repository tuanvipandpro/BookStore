import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './routers/router'

import './assets/css/Common/App.scss'
import 'antd/dist/antd.css';

function App() {
  const routeManagement = () => {
    return routes.map((route, index) => 
        <Route 
          key={index} 
          path={route.path} 
          component={route.component} 
          exact={route.exact}
        />
      )
  }

  return (
    <Router>
        <Switch>
            {routeManagement()}
        </Switch>   
    </Router>   
  );
}

export default App;
