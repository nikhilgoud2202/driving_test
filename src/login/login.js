

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup
} from 'reactstrap';

function Login(props) {
  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')
  useEffect(() => {

    if (localStorage.userID) {
      props.history.push("/driverlogin");
    }

  })
  let LoginHandler = (e) => {
    e.preventDefault();
    axios.post("https://drivingtest.herokuapp.com/login", {
      username,
      password
    })
      .then(
        resp => {

          console.log(resp)
          if (resp.data) {
            localStorage.setItem("userID", resp.data._id);
            props.history.push("/driverlogin");
            clearData
          } else {
            alert("You are not authorized to perform this action");
          }

        }
      )



  }


  return (
    <div className="Container">
      <Card className="card-border">
        <CardBody>
          <header className="panel-heading">

            <h2 className="panel-title">Login</h2>
          </header>
          <form onSubmit={LoginHandler}>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label for="validationTooltip03">User Name</label>
                <input type="text" className="form-control"
                  onChange={(e) => setUsername(e.target.value)}
                  id="validationTooltip03" autocomplete="off" placeholder="User Name" required />

              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label for="validationTooltip03">Password</label>
                <input type="password" className="form-control"
                  onChange={(e) => setPassword(e.target.value)} id="validationTooltip03" autocomplete="off" placeholder="Password" required />

              </div>
            </div>

            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">Sign in</button>
              </div>
            </div>

          </form>
        </CardBody>
      </Card>
    </div>
  )
}



export default Login;