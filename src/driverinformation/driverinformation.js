import React, { Component } from 'react';
import axios from 'axios';
import {
    Button,
    Card,
    CardBody,
    Col,
    FormGroup
} from 'reactstrap';

import Header from '../Header';
import { connect } from "react-redux";
import { updateTestData, clearData } from "../redux/actions/index"

class DriverInformation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            today: new Date(),
            lastname: '',
            licenseNumber: '',
            triler: '',
            tractor: '',
            tractorPlate: '',
            trilerPlate: '',
            email: '',
            classType: '',
            expiryDate: '',
            companyName: '',
            address: '',
            truckType: '',
            startTime: '',
            startOdometer: '',
            startLoction: '',
            expiryDates: ''



        }
    }
    componentDidMount() {
        const { licenseNumber, firstName, lastName, startTime } = this.props && this.props.localData;
        if (!localStorage.userID) {
            this.props.history.push("/");
        }
        else if (!licenseNumber) {
            this.props.history.push("/driverlogin");
        }
        // else if (startTime) {
        //     this.props.history.push("/start-test");
        // }
        axios.post("https://drivingtest.herokuapp.com/getDriverDetails", {
            licenseNumber
        })
            .then(
                resp => {
                    if (resp.data) {
                        this.setState({
                            firstName: firstName,
                            lastName: lastName,
                            licenseNumber: licenseNumber,
                            email: resp.data.email,
                            companyName: resp.data.companyName,
                            classType: resp.data.classType,
                            address: resp.data.address,
                            tractor: resp.data.tractor,
                            tractorPlate: resp.data.tractorPlate,
                            triler: resp.data.triler,
                            trilerPlate: resp.data.trilerPlate,
                            truckType: resp.data.truckType

                        })
                    } else {
                        this.setState({
                            firstName: firstName,
                            lastName: lastName,
                            licenseNumber: licenseNumber
                        })
                    }
                })

    }

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

    handleChanges = (e) => this.setState({ [e.target.name]: e.target.value })
    handleChangess = (e) => {

        var hours = parseInt(e.target.value.split(":")[0]);
        var AmOrPm = hours >= 12 ? 'P.M' : 'A.M';
        hours = (hours % 12) || 12;
        var minutes = parseInt(e.target.value.split(":")[1]);
        var finalTime = hours + ":" + minutes + " " + AmOrPm;
        console.log(finalTime)
        this.setState({ [e.target.name]: finalTime })
    }

    DriverTest = (e) => {
        e.preventDefault();
        let dat = this.state.expiryDate.substring(0, 10)

        let addDriverDetails = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            licenseNumber: this.state.licenseNumber,
            expiryDate: dat,
            classType: this.state.classType,
            companyName: this.state.companyName,
            address: this.state.address,
            tractor: this.state.tractor,
            tractorPlate: this.state.truckType,
            triler: this.state.triler,
            trilerPlate: this.state.trilerPlate,
            truckType: this.state.truckType
        }

        if (window.confirm("are you sure you want Start Test!")) {



            axios.post("https://drivingtest.herokuapp.com/addDriverDetails",
                addDriverDetails
            )
                .then(
                    resp => {
                        console.log(this.state.startLoction)
                        this.props.updateData({
                            startLoction: this.state.startLoction,
                            startTime: this.state.startTime,
                            startOdometer: this.state.startOdometer,

                        })
                        this.props.history.push("/start-test");
                    })

        }

    }


    render() {


        return (
            <div>
                <Header show={true} />


                <div className="Container ">
                    <Card className="card-border">
                        <CardBody>
                            <header class="panel-heading">

                                <h4 class="panel-title">Driver Information:</h4>
                            </header>
                            <form onSubmit={this.DriverTest}>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">First name</label>
                                        <input type="text" class="form-control" name="firstName" value={this.state.firstName} onChange={this.handleChanges} placeholder="First Name" required />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputPassword4">Last Name</label>
                                        <input type="text" class="form-control" name="lastName" value={this.state.lastName} onChange={this.handleChanges} placeholder="Last Name" required />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputAddress">License Number</label>
                                        <input type="text" class="form-control" name="licenseNumber" disabled id="lic_num" value={this.state.licenseNumber} onChange={this.handleChange} placeholder="License Number" required />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Email</label>
                                        <input type="email" class="form-control" name="email" value={this.state.email} onChange={this.handleChange} aceholder="Enter Your Email" required />
                                    </div>
                                </div>


                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputCity">Expiry Date</label>
                                        <input type="date" min={this.state.today} value={this.state.expiryDate} onChange={this.handleChange} class="form-control" name="expiryDate" placeholder="Expiry Date" required />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputState">Class Type</label>
                                        <select value={this.state.classType} onChange={this.handleChange} class="form-control" name="classType">
                                            <option selected>Select Class</option>
                                            <option value="C-Class">C-Class</option>
                                            <option value="AZ">AZ</option>
                                            <option value="DZ">DZ</option>
                                        </select>
                                    </div>

                                </div>

                                <header class="panel-heading">

                                    <h4 class="panel-title">CompanyInformation:</h4>
                                </header>


                                <div class="form-group">
                                    <label for="inputAddress" >Company Name</label>
                                    <input type="text" class="form-control" name="companyName" value={this.state.companyName} onChange={this.handleChange} placeholder="Company Name" required />
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress2" >Address</label>
                                    <input type="text" class="form-control" name="address" value={this.state.address} onChange={this.handleChange} placeholder="Address" required />
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputCity" >Tractor Unit #</label>
                                        <input type="text" class="form-control" name="tractor" value={this.state.tractor} onChange={this.handleChange} placeholder="Tractor" required />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputCity" >Tractor Plate #</label>
                                        <input type="text" class="form-control" name="tractorPlate" value={this.state.tractorPlate} onChange={this.handleChange} placeholder="Tractor Plate" required />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputState">Triler #</label>
                                        <input type="text" class="form-control" name="triler" value={this.state.triler} onChange={this.handleChange} laceholder="Triler" required />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputState">Triler Plate #</label>
                                        <input type="text" class="form-control" name="trilerPlate" value={this.state.trilerPlate} onChange={this.handleChange} placeholder="Triler Plate" required />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputZip">Truck Type</label>
                                        <input type="text" class="form-control" name="truckType" value={this.state.truckType} onChange={this.handleChange} placeholder="Truck Type" required />
                                    </div>
                                </div>
                                <header class="panel-heading">

                                    <h4 class="panel-title">Start Test Information:</h4>
                                </header>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputZip"  > Test Starting Time</label>
                                        <input type="time" class="form-control" name="startTime" onChange={this.handleChangess} placeholder="Test Start Time" required />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputZip">Start Odometer</label>
                                        <input type="number" class="form-control" name="startOdometer" onChange={this.handleChanges} placeholder="Start Odometer Reading" required />
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label for="inputZip">Start Location</label>
                                        <input type="text" class="form-control" name="startLoction" onChange={this.handleChanges} placeholder="Start Location" required />
                                    </div>
                                    <div class="form-group col-md-12">
                                        <button type="submit" class="btn btn-primary  pull-right">Start Test</button>
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

const mapStateToProps = state => {
    return {
        localData: state.localData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateData: (data) => dispatch(updateTestData(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DriverInformation);

