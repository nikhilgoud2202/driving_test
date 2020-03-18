import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.png'
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom';


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
                <div className="App-header" style={{ backgroundColor: "#f6f6f6" }} >
                    <img src={logo} onClick="/" style={{ height: "50px" }} />
                    {this.props.show ? <a onClick={this.LogoutHandler} style={{ marginTop: "15px", marginRight: "10px" }} class="btn btn-info btn-md pull-right">
                        <span class="glyphicon glyphicon-log-out"></span> Log out
        </a> : null}
                    {/* <button class="btn btn-outline-success  pull-right" type="submit">LogOut</button> */}
                </div>
            </div>
        )
    }
}
export default withRouter(Header);