import React from 'react';
import '@coreui/icons/css/coreui-icons.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './scss/style.css';
import { Switch, Route, withRouter } from 'react-router-dom';

import Form from '../src/form';
import Login from './login/login';
import DriverLogin from './driverlogin/driverlogin';
import DriverInformation from './driverinformation/driverinformation';
import Endtest from './EndTest/Endtest';
import UserData from './UserData';


function App(props) {


  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Login} />


        <Route path="/driverlogin" component={DriverLogin} />
        <Route path="/driverinfo" component={DriverInformation} />
        <Route path="/start-test" component={Form} />
        <Route path="/end-test" component={Endtest} />
        <Route path="/user-data" component={UserData} />
      </Switch>
    </div>
  );
}


export default withRouter(App);
