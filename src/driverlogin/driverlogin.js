
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
import { connect } from "react-redux";
import { updateTestData } from "../redux/actions/index"

class DriverLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastname: '',
            licenseNumber: ''
        }
    }
    componentDidMount() {


        if (!localStorage.userID) {
            this.props.history.push("/");
        }
        else if (localStorage.lic_ID) {
            this.props.history.push("/driverinfo");
        }
        else if (localStorage.startTime) {
            this.props.history.push("/start-test");
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    driverLogin = (e) => {
        e.preventDefault();
        let licenseNumber = this.state.licenseNumber;

        axios.post("https://drivingtest.herokuapp.com/getDriverDetails",
            licenseNumber
        )
            .then(
                resp => {
                    if (resp.data) {
                        this.props.updateData({
                            licenseNumber: this.state.licenseNumber,
                            firstName: this.state.firstName,
                            lastName: this.state.lastName
                        })
                        this.props.history.push("/driverinfo");
                    } else {
                        this.props.updateData({
                            licenseNumber: this.state.licenseNumber,
                            firstName: this.state.firstName,
                            lastName: this.state.lastName
                        })
                        this.props.history.push("/driverinfo");
                    }
                })
    }
    render() {
        return (
            <div>
                <Header show={true} />
                <div className="Container">
                    <Card className="card-border">
                        <CardBody>

                            <header className="panel-heading">

                                <h2 className="panel-title">Driver Login</h2>
                            </header>



                            <form onSubmit={this.driverLogin}>
                                <div className="form-row">
                                    <div className="col-md-4 mb-3">
                                        <label for="validationTooltip01">First name</label>
                                        <input type="text" className="form-control" autocomplete="off"
                                            onChange={this.handleChange} placeholder="First name" name="firstName" required />

                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label for="validationTooltip02">Last name</label>
                                        <input type="text" className="form-control" autocomplete="off" name="lastName" onChange={this.handleChange}
                                            placeholder="Last name" required />

                                    </div>

                                </div>
                                <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                        <label for="validationTooltip03">License Number</label>
                                        <input type="text" className="form-control"
                                            onChange={this.handleChange} id="validationTooltip03" autocomplete="off" name="licenseNumber" placeholder="License Number" required />

                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-10">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>


                            </form>
                        </CardBody></Card>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        formData: state.formData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateData: (data) => dispatch(updateTestData(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DriverLogin);
