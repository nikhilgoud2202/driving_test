
import React, { Component } from 'react';
import axios from 'axios';
import SignatureCanvas from 'react-signature-canvas'
import {
    Button,
    Card,
    CardBody,
    Col,
    FormGroup
} from 'reactstrap';
import { render } from 'react-dom';
import './endstyle.css';
import Header from '../Header';


class Endtest extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sign2: {},
            sign1: {},
            totalPoints: '',
            endLocation: '',
            endOdometer: '',
            endTime: '',
            totalKm: '',
            driverComment: '',
            examinerComment: '',
            qualified: '',
            sign1trimmedDataURL: null,
            sign2trimmedDataURL: null,
            tres: {}


        }
    }


    Signone = () => {
        this.sign1.clear()
    }
    Signtwo = () => {
        this.sign2.clear()
    }
    trim = () => {
        this.setState({
            sign2trimmedDataURL: this.sigPad.getTrimmedCanvas()
                .toDataURL('image/png')
        })
    }
    EndHandler = (e) => {
        e.preventDefault();
        let end_data = {
            licenseNumber: localStorage.getItem("lic_ID"),
            startTime: localStorage.getItem("start_time"),
            startOdometer: localStorage.getItem("startOdmtr"),
            startLocation: localStorage.getItem("startLoc"),
            endTime: this.state.endTime,
            endOdometer: this.state.endOdometer,
            KMsDriven: this.state.totalKm,
            totalPoints: this.state.totalPoints,
            qualified: this.state.qualified,
            endLocation: this.state.endLocation,
            examinerComments: this.state.examinerComment,
            driverComments: this.state.driverComment
        }
        axios.post("https://drivingtest.herokuapp.com/addTestInformation",
            end_data
        )
            .then(
                resp => {

                    console.log(resp.data)
                })

    }
    handleChange = (e) => {

        this.setState({ [e.target.name]: e.target.value })

    }
    handleChanges = (e) => {

        this.setState({ [e.target.name]: e.target.value })
        this.state.tres[e.target.name] = parseFloat(e.target.value);
        var startOdmtr = localStorage.getItem("startOdmtr")
        console.log(startOdmtr)
        var res = parseFloat(this.state.tres["endOdometer"] - startOdmtr)
        console.log(res)
        this.setState({ totalKm: res })

    }


    render() {

        return (
            <div>
                <Header show={true} />
                <div className="Container ">
                    <Card className="card-border">
                        <CardBody>
                            <header class="panel-heading">

                                <h4 class="panel-title">End Test Information:</h4>
                            </header>
                            <form onSubmit={this.EndHandler}>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputZip"> Test End Time</label>
                                        <input type="time" class="form-control" onChange={this.handleChange} name="endTime" placeholder="Test  End Time" required />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputZip">End Odometer</label>
                                        <input type="number" class="form-control" min={localStorage.getItem("startOdmtr")} onChange={this.handleChanges} name="endOdometer" placeholder=" End Odometer Reading" required />
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label for="inputZip">End Location</label>
                                        <input type="text" class="form-control" onChange={this.handleChange} name="endLocation" placeholder="End Location" required />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputZip">Total Kilometers Driven</label>
                                        <input type="number" class="form-control" disabled value={this.state.totalKm} onChange={this.handleChange} name="totalKm" placeholder="Total Kilometers Driven" required />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputZip">Total Points</label>
                                        <input type="number" class="form-control" onChange={this.handleChange} name="totalPoints" placeholder=" Total Points" required />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputZip">Qualified</label>

                                        <select class="form-control" onChange={this.handleChange} name="qualified" required>
                                            <option value="">Select Choice</option>
                                            <option value="Qualified">Qualified</option>
                                            <option value="Not Qualified">Not Qualified</option>
                                            <option value="Company to Decide">Company to Decide</option>
                                        </select>
                                    </div>



                                    <div class="form-group col-md-12">
                                        <label for="exampleFormControlTextarea1">Examiner Comment Section:</label>
                                        <textarea class="form-control" onChange={this.handleChange} name="examinerComment" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="exampleFormControlTextarea1">Examiner Signature:</label>
                                        <SignatureCanvas penColor='green'
                                            ref={(ref) => { this.sign1 = ref }} canvasProps={{ width: 300, height: 100, className: 'sigCanvas' }} />
                                    </div>
                                    <div class="form-group col-md-6 sign-btn">
                                        <a class="btn btn-primary  pull-center" onClick={this.Signone}>Clear Signature</a>

                                    </div>
                                    <div class="form-group col-md-12 ">
                                        <label for="exampleFormControlTextarea1">Driver Comment Section:</label>
                                        <textarea class="form-control" onChange={this.handleChange} name="driverComment" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="exampleFormControlTextarea1">Driver Signature:</label>
                                        <SignatureCanvas penColor='green'
                                            ref={(ref) => { this.sign2 = ref }} canvasProps={{ width: 300, height: 100, className: 'sigCanvas' }} />
                                    </div>

                                    <div class="form-group col-md-6 sign-btn">

                                        <a class="btn btn-primary  pull-center" onClick={this.Signtwo} >Clear Signature</a>
                                    </div>


                                    <div class="form-group col-md-12">
                                        <button type="submit" class="btn btn-primary  pull-right" >End Test</button>

                                    </div>
                                </div>


                                {/* {this.state.sign1trimmedDataURL
                                    ? <img
                                        src={this.state.trimmedDataURL} />
                                    : null} */}

                            </form>




                        </CardBody>
                    </Card>
                </div>

            </div>
        )
    }
}
export default Endtest;