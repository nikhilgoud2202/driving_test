import React, { Component } from 'react';
import axios from 'axios';
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup
} from 'reactstrap';
import { render } from 'react-dom';
import Header from '../Header';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',

    }
  }
  componentDidMount() {

    if (localStorage.userID) {
      this.props.history.push("/driverlogin");
    }

  }
  onChange = (e) => {

    this.setState({ [e.target.name]: e.target.value })
  }

  LoginHandler = (e) => {
    e.preventDefault();

    let loginData = {
      username: this.state.username,
      password: this.state.password
    }


    axios.post("https://drivingtest.herokuapp.com/login", loginData)
      .then(
        resp => {
          if (resp.data) {
            localStorage.setItem("userID", resp.data._id);
            this.props.history.push("/driverlogin");

          } else {
            alert("You are not authorized to perform this action");
          }

        }
      )



  }

  render() {
    return (
      <div>
        <Header show={false} />
        <div className="Container">
          <Card className="card-border">
            <CardBody>
              <header className="panel-heading">

                <h2 className="panel-title">Login</h2>
              </header>
              <form onSubmit={this.LoginHandler}>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label for="validationTooltip03">User Name</label>
                    <input type="text" className="form-control"
                      onChange={this.onChange}
                      id="validationTooltip03" autocomplete="off" name="username" placeholder="User Name" required />

                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label for="validationTooltip03">Password</label>
                    <input type="password" className="form-control"
                      onChange={this.onChange} id="validationTooltip03" name="password" autocomplete="off" placeholder="Password" required />

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
      </div>
    )
  }
}


export default (Login)

