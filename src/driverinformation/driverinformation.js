import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TimePicker from 'react-time-picker';
import axios from 'axios';

import {
    Button,
    Card,
    CardBody,
    Col,
    FormGroup
} from 'reactstrap';
function DriverInformation(props) {
    let [time, setTime] = useState('')
    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    let [licenseNumber, setLicenseNumber] = useState('')
    let [email, setEmail] = useState('')
    let [expiryDate, setExpiryDate] = useState('')
    let [classType, setClassType] = useState('')
    let [companyName, setCompanyName] = useState('')
    let [address, setAddress] = useState('')
    let [tractor, setTractor] = useState('')
    let [tractorPlate, setTractorPlate] = useState('')
    let [triler, setTriler] = useState('')
    let [trilerPlate, setTrilerPlate] = useState('')

    let [straightTruck, setStraightTruck] = useState('')
    let [testStartingTime, setTestStartingTime] = useState('')
    let [startOdometer, setStartOdometer] = useState('')
    let [startLocation, setStartLocation] = useState('')

    let date = new Date()
    useEffect(() => {


        if (!localStorage.userID) {
            props.history.push("/");
        }
        else if (!localStorage.lic_ID) {
            props.history.push("/driverlogin");
        }
        else if (localStorage.start_time) {
            props.history.push("/start-test");
        }

        axios.post("https://drivingtest.herokuapp.com/getDriverDetails", {
            licenseNumber
        })
            .then(
                resp => {
                    console.log(resp.data)
                    if (resp.data) {
                        alert("data")
                        setFirstName(resp.data.firstName)
                        setLastName(resp.data.lastName)
                        setLicenseNumber(licenseNumber)
                        setExpiryDate(new Date(resp.data.expiryDate))
                        setClassType(resp.data.classType)
                        setEmail(resp.data.email)
                        setCompanyName(resp.data.companyName)
                        setAddress(resp.data.address)
                        setTractor(resp.data.tractor)
                        setTractorPlate(resp.data.tractorPlate)
                        setTriler(resp.data.triler)
                        setTrilerPlate(resp.data.trilerPlate)
                        setStraightTruck(resp.data.straightTruck)
                    } else {
                        alert("no")
                        setLicenseNumber(localStorage.getItem("lic_ID"))
                        setFirstName(localStorage.getItem("firstname"))
                        setLastName(localStorage.getItem("lastname"))
                    }

                })

    }, [])
    let DriverTest = (e) => {
        e.preventDefault();
        let Driver_data = {
            "firstName": firstName,
            "lastName": lastName,
            "licenseNumber": licenseNumber,
            "expiryDate": expiryDate,
            "classType": classType,
            "email": email,
            "companyName": companyName,
            "address": address,
            "tractor": address,
            "triler": triler,
            "straightTruck": straightTruck

        }
        console.log(data)

        axios.post("https://drivingtest.herokuapp.com/adddriverdetails",
            Driver_data
        )
            .then(
                resp => {

                    console.log(resp)
                    localStorage.setItem("start_time", testStartingTime);
                    localStorage.setItem("startOdmtr", startOdometer)
                    localStorage.setItem("startLoc", startLocation)
                    props.history.push("/start-test");
                })

    }

    return (

        <div className="Container ">
            <Card className="card-border">
                <CardBody>
                    <header class="panel-heading">

                        <h4 class="panel-title">Driver Information:</h4>
                    </header>
                    <form onSubmit={DriverTest}>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">First name</label>
                                <input type="text" class="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Last Name</label>
                                <input type="text" class="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputAddress">License Number</label>
                                <input type="text" class="form-control" id="lic_num" value={licenseNumber} onChange={(e) => setLicenseNumber(e.target.value)} placeholder="License Number" required />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" required />
                            </div>
                        </div>


                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCity">Expiry Date</label>
                                <input type="date" min={date} value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} class="form-control" placeholder="Expiry Date" required />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputState">Class Type</label>
                                <select value={classType} onChange={(e) => setClassType(e.target.value)} class="form-control">
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
                            <input type="text" class="form-control" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Company Name" required />
                        </div>
                        <div class="form-group">
                            <label for="inputAddress2" >Address</label>
                            <input type="text" class="form-control" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCity" >Tractor Unit #</label>
                                <input type="text" class="form-control" value={tractor} onChange={(e) => setTractor(e.target.value)} placeholder="Tractor" required />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputCity" >Tractor Plate #</label>
                                <input type="text" class="form-control" value={tractorPlate} onChange={(e) => setTractorPlate(e.target.value)} placeholder="Tractor Plate" required />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">Triler #</label>
                                <input type="text" class="form-control" value={triler} onChange={(e) => setTriler(e.target.value)} placeholder="Triler" required />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">Triler Plate #</label>
                                <input type="text" class="form-control" value={trilerPlate} onChange={(e) => setTrilerPlate(e.target.value)} placeholder="Triler Plate" required />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputZip">Truck Type</label>
                                <input type="text" class="form-control" value={straightTruck} onChange={(e) => setStraightTruck(e.target.value)} placeholder="Truck Type" required />
                            </div>
                        </div>
                        <header class="panel-heading">

                            <h4 class="panel-title">Start Test Information:</h4>
                        </header>



                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputZip"  > Test Starting Time</label>
                                <input type="time" class="form-control" onChange={(e) => setTestStartingTime(e.target.value)} placeholder="Test Start Time" required />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputZip">Start Odometer</label>
                                <input type="number" class="form-control" onChange={(e) => setStartOdometer(e.target.value)} placeholder="Start Odometer Reading" required />
                            </div>
                            <div class="form-group col-md-12">
                                <label for="inputZip">Start Location</label>
                                <input type="text" class="form-control" onChange={(e) => setStartLocation(e.target.value)} placeholder="Start Location" required />
                            </div>
                            <div class="form-group col-md-12">

                                <button type="submit" class="btn btn-primary  pull-right">Start Test</button>


                            </div>
                        </div>



                    </form>
                </CardBody>
            </Card>
        </div>
    )
}



export default DriverInformation;