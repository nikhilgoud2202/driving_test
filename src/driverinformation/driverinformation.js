import React, { useState } from 'react';
import { connect } from 'react-redux';
import TimePicker from 'react-time-picker';
import {
    Button,
    Card,
    CardBody,
    Col,
    FormGroup
} from 'reactstrap';
function DriverInformation(props) {
    let [time, setTime] = useState('')
    let date = new Date()
    let DriverTest = (e) => {
        props.history.push("/start-test");
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
                                <input type="text" class="form-control" placeholder="First Name" required />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Last Name</label>
                                <input type="text" class="form-control" placeholder="Last Name" required />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputAddress">License Number</label>
                                <input type="text" class="form-control" placeholder="License Number" required />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" placeholder="Enter Your Email" required />
                            </div>
                        </div>


                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCity">Expiry Date</label>
                                <input type="date" min={date} class="form-control" placeholder="Expiry Date" required />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputState">Class Type</label>
                                <select class="form-control">
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
                            <label for="inputAddress">Company Name</label>
                            <input type="text" class="form-control" placeholder="Company Name" required />
                        </div>
                        <div class="form-group">
                            <label for="inputAddress2">Address</label>
                            <input type="text" class="form-control" placeholder="Address" required />
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputCity">Tractor</label>
                                <input type="text" class="form-control" placeholder="Tractor" required />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">Triler</label>
                                <input type="text" class="form-control" placeholder="Triler" required />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputZip">Straight Truck</label>
                                <input type="text" class="form-control" placeholder="Straight Truck" required />
                            </div>
                        </div>
                        <header class="panel-heading">

                            <h4 class="panel-title">Start Test Information:</h4>
                        </header>



                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputZip"> Test Starting Time</label>
                                <input type="time" class="form-control" placeholder="Test Start Time" required />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputZip">Start Odometer</label>
                                <input type="number" class="form-control" placeholder="Start Odometer Reading" required />
                            </div>
                            <div class="form-group col-md-12">
                                <label for="inputZip">Start Location</label>
                                <input type="text" class="form-control" placeholder="Start Location" required />
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