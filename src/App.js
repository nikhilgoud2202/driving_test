import React, { Component } from 'react';
import '@coreui/icons/css/coreui-icons.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './scss/style.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import logo from './logo.png'



import Form from '../src/form';
import Login from './login/login';
import DriverLogin from './driverlogin/driverlogin';
import DriverInformation from './driverinformation/driverinformation';
import Endtest from './EndTest/Endtest';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header" style={{ backgroundColor: "#f6f6f6" }} >
          <img src={logo} style={{ height: "50px" }} />
        </div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/driverlogin" component={DriverLogin} />
          <Route exact path="/driverinfo" component={DriverInformation} />
          <Route exact path="/start-test" component={Form} />
          <Route exact path="/end-test" component={Endtest} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
