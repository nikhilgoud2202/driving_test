
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
import { connect } from "react-redux";
import { updateData, clearData } from "../redux/actions/index"


class Endtest extends Component {
    constructor(props) {
        super(props)
        var total = parseFloat(this.props.formData.P1_total_Sc + this.props.formData.P2_total_Sc + this.props.formData.P3_total_Sc + this.props.formData.P4_total_Sc + this.props.formData.P5_total_Sc + this.props.formData.P6_total_Sc + this.props.formData.P7_total_Sc)

        this.state = {
            sign2: {},
            sign1: {},

            totalPoints: total,
            endLocation: '',
            endOdometer: '',
            endTime: '',
            totalKm: '',
            endLocation: '',
            driverComment: '',
            examinerComment: '',
            qualified: '',
            routeTravelled: '',
            sign1trimmedDataURL: null,
            sign2trimmedDataURL: null,
            tres: {},
            driverInfo: {},
            answers: {}


        }
    }

    componentDidMount() {
        const { licenseNumber, startTime, testCompleted } = this.props.localData;
        if (!localStorage.userID) {
            this.props.history.push("/");
        }
        else if (!licenseNumber) {
            this.props.history.push("/driverlogin");
        } else if (!testCompleted) {
            this.props.history.push("/start-test");
        }
        axios.post("https://drivingtest.herokuapp.com/getDriverDetails", {
            licenseNumber
        })
            .then(
                resp => {
                    this.setState({ driverInfo: resp.data })
                })
        axios.post("https://drivingtest.herokuapp.com/getAnswers", {
            licenseNumber
        })
            .then(
                ans => {
                    this.setState({ answers: ans.data })

                })

    }
    Signone = () => {
        this.sign1.clear()
    }
    Signtwo = () => {
        this.sign2.clear()
    }

    EndHandler = (e) => {
        e.preventDefault();
        const { licenseNumber, startTime, startOdometer, startLoction } = this.props.localData;
        console.log(startLoction)




        if (window.confirm("are you sure you want end the Test!")) {
            let end_data = {
                licenseNumber: licenseNumber,
                startTime: startTime,
                startOdometer: startOdometer,
                startLocation: startLoction,
                endLocation: this.state.endLocation,
                endTime: this.state.endTime,
                endOdometer: this.state.endOdometer,
                KMsDriven: this.state.totalKm,
                totalPoints: this.state.totalPoints,
                qualified: this.state.qualified,
                endLocation: this.state.endLocation,
                examinerSignature: this.sign1.getTrimmedCanvas().toDataURL('image/png'),
                driverSignature: this.sign2.getTrimmedCanvas().toDataURL('image/png'),
                examinerComments: this.state.examinerComment,
                driverComments: this.state.driverComment,
                routeTravelled: this.state.routeTravelled


            }

            axios.post("https://drivingtest.herokuapp.com/addTestInformation",
                end_data
            )
                .then(
                    resp => {
                        var dtae = new Date();
                        var dates = dtae.getFullYear() + '-' + dtae.getMonth() + '-' + dtae.getDate();



                        var pdf = {
                            datee: dates,
                            DriverInfo: this.state.driverInfo,
                            answers: this.state.answers,
                            testInfo: resp.data
                        }
                        console.log(pdf)

                        axios.post("https://drivingtest.herokuapp.com/sendpdf",
                            pdf
                        )
                            .then(
                                pdff => {
                                    console.log(pdff.data)


                                    this.props.history.push("/driverlogin");
                                })
                    })
        }
    }
    handleChange = (e) => {

        this.setState({ [e.target.name]: e.target.value })

    }
    handleChangess = (e) => {

        var hours = parseInt(e.target.value.split(":")[0]);
        var AmOrPm = hours >= 12 ? 'P.M' : 'A.M';
        hours = (hours % 12) || 12;
        var minutes = parseInt(e.target.value.split(":")[1]);
        var finalTime = hours + ":" + minutes + " " + AmOrPm;
        this.setState({ [e.target.name]: finalTime })
    }

    handleChanges = (e) => {
        const { startOdometer } = this.props.localData;
        this.setState({ [e.target.name]: e.target.value })
        this.state.tres[e.target.name] = parseFloat(e.target.value);
        var res = parseFloat(this.state.tres["endOdometer"] - startOdometer)
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
                                        <input type="time" class="form-control" onChange={this.handleChangess} name="endTime" placeholder="Test  End Time" required />
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
                                        <input type="number" class="form-control" disabled value={this.state.totalKm} name="totalKm" placeholder="Total Kilometers Driven" required />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputZip">Total Points</label>
                                        <input type="number" class="form-control" value={this.state.totalPoints} disabled name="totalPoints" placeholder=" Total Points" required />
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
                                        <label for="exampleFormControlTextarea1">Route Travelled:</label>
                                        <textarea class="form-control" onChange={this.handleChange} name="routeTravelled" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>


                                    <div class="form-group col-md-12">
                                        <label for="exampleFormControlTextarea1">Examiner Comment Section:</label>
                                        <textarea class="form-control" onChange={this.handleChange} name="examinerComment" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="exampleFormControlTextarea1">Examiner Signature:</label>
                                        <SignatureCanvas penColor='green'
                                            ref={(ref) => { this.sign1 = ref }} canvasProps={{ width: 300, height: 100, className: 'sigCanvas pull-left' }} />
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
                                            ref={(ref) => { this.sign2 = ref }} canvasProps={{ width: 300, height: 100, className: 'sigCanvas pull-left' }} />
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
const mapStateToProps = state => {
    return {
        formData: state.formData,
        localData: state.localData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateData: (data) => dispatch(updateData(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Endtest);