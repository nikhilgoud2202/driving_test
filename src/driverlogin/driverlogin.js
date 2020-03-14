import React, { useState, useEffect } from 'react';
import {
    Button,
    Card,
    CardBody,
    Col,
    FormGroup
} from 'reactstrap';
import axios from 'axios';


function DriverLogin(props) {
    let [licenseNumber, setLicenseNumber] = useState('')
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('')
    useEffect(() => {

        if (!localStorage.userID) {
            props.history.push("/");
        }
        else if (localStorage.lic_ID) {
            props.history.push("/driverinfo");
        }
        else if (localStorage.startTime) {
            props.history.push("/start-test");
        }
    })
    let driverLogin = (e) => {
        e.preventDefault();
        axios.post("https://drivingtest.herokuapp.com/getDriverDetails", {
            licenseNumber
        })
            .then(
                resp => {

                    console.log(resp)
                    if (resp.data) {
                        localStorage.setItem("lic_ID", resp.data.licenseNumber);
                        localStorage.setItem("firstname", resp.data.firstName)
                        localStorage.setItem("lastname", resp.data.lastName)
                        props.history.push("/driverinfo");
                    } else {
                        localStorage.setItem("lic_ID", licenseNumber);
                        localStorage.setItem("firstname", firstName)
                        localStorage.setItem("lastname", lastName)
                        props.history.push("/driverinfo");
                    }
                })
    }
    return (
        <div className="Container">
            <Card className="card-border">
                <CardBody>

                    <header className="panel-heading">

                        <h2 className="panel-title">Driver Login</h2>
                    </header>



                    <form onSubmit={driverLogin}>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label for="validationTooltip01">First name</label>
                                <input type="text" className="form-control" autocomplete="off"
                                    onChange={(e) => setFirstName(e.target.value)} placeholder="First name" required />

                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationTooltip02">Last name</label>
                                <input type="text" className="form-control" autocomplete="off" onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Last name" required />

                            </div>

                        </div>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label for="validationTooltip03">License Number</label>
                                <input type="text" className="form-control"
                                    onChange={(e) => setLicenseNumber(e.target.value)} id="validationTooltip03" autocomplete="off" placeholder="License Number" required />

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
    )
}
export default DriverLogin;