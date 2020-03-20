import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.png'
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom';
import {
    Button,
    Card,
    CardBody,
    Col,
    FormGroup
} from 'reactstrap';


class Header extends Component {
    constructor(props) {
        super(props)

    }
    LogoutHandler = (e) => {
        if (window.confirm("are you sure you want to logout!")) {
            localStorage.clear();
            this.props.history.push("/");
        }

    }
    render() {
        return (
            <div>
                <FormGroup >

                    <div className="App-header row" style={{ backgroundColor: "#f6f6f6" }} >




                        <div className="form-group col-md-5">
                            <img src={logo} onClick="/" style={{ height: "50px" }} /></div> <div className="form-group col-md-5">
                            <h2 style={{ color: "midnightblue" }}> Road Test Evaluation</h2></div><div className="form-group col-md-2 ">
                            {this.props.show ? <a onClick={this.LogoutHandler} style={{ marginTop: "15px", marginRight: "10px" }} class="btn btn-info btn-md pull-right">
                                Log out
        </a> : null}
                        </div>
                        {/* <button class="btn btn-outline-success  pull-right" type="submit">LogOut</button> */}
                    </div>
                </FormGroup>
            </div>
        )
    }
}
export default withRouter(Header);