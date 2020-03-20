
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
        var total = parseFloat(this.props.formData.P7_total_Sc + this.props.formData.P7_total_Sc + this.props.formData.P7_total_Sc + this.props.formData.P7_total_Sc + this.props.formData.P7_total_Sc + this.props.formData.P7_total_Sc + this.props.formData.P7_total_Sc)

        this.state = {
            sign2: {},
            sign1: {},

            totalPoints: parseFloat(total),
            endLocation: '',
            endOdometer: '',
            endTime: '',
            totalKm: '',
            driverComment: '',
            examinerComment: '',
            qualified: '',
            sign1trimmedDataURL: null,
            sign2trimmedDataURL: null,
            tres: {},
            driverInfo: {},
            answers: {}


        }
    }

    componentDidMount() {



        if (!localStorage.userID) {
            this.props.history.push("/");
        }
        else if (!localStorage.lic_ID) {
            this.props.history.push("/driverlogin");
        }
        else if (localStorage.start_time) {
            this.props.history.push("/start-test");
        }
        let licenseNumber = localStorage.getItem("lic_ID");
        axios.post("https://drivingtest.herokuapp.com/getDriverDetails", {
            licenseNumber
        })
            .then(
                resp => {
                    console.log("driverinfo", resp.data)

                    this.setState({ driverInfo: resp.data })

                })
        axios.post("https://drivingtest.herokuapp.com/getAnswers", {
            licenseNumber
        })
            .then(
                ans => {
                    console.log("Answers", ans.data)

                    this.setState({ answers: ans.data })

                })

    }
    Signone = () => {
        this.sign1.clear()
    }
    Signtwo = () => {
        this.sign2.clear()
    }
    imageChange = (e) => {
        this.setState({
            sign2trimmedDataURL: this.sign2.getTrimmedCanvas()
                .toDataURL('image/png')
        })
    }
    imageChanges = (e) => {
        this.setState({
            sign1trimmedDataURL: this.sign1.getTrimmedCanvas()
                .toDataURL('image/png')
        })
    }
    EndHandler = (e) => {
        e.preventDefault();
        if (window.confirm("are you sure you want end the Test!")) {
            let end_data = {
                licenseNumber: localStorage.getItem("lic_ID"),
                startTime: localStorage.getItem("startTime"),
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
                        var pdf = {
                            DriverInfo: this.state.driverInfo,
                            answers: this.state.answers,
                            testInfo: resp.data
                        }
                        axios.post("https://drivingtest.herokuapp.com/sendpdf",
                            pdf
                        )
                            .then(
                                pdff => {
                                    console.log(pdff.data)
                                    // this.props.clearData();
                                    localStorage.removeItem("firstname");
                                    localStorage.removeItem("startOdmtr");
                                    localStorage.removeItem("startLoc");
                                    localStorage.removeItem("startTime");
                                    localStorage.removeItem("lastname");
                                    localStorage.removeItem("lic_ID");
                                    this.props.history.push("/driverlogin");
                                })
                    })
        }
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
        console.log(this.state.sign2trimmedDataURL)
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
                                        <label for="exampleFormControlTextarea1">Examiner Comment Section:</label>
                                        <textarea class="form-control" onChange={this.handleChange} name="examinerComment" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="exampleFormControlTextarea1">Examiner Signature:</label>
                                        <SignatureCanvas penColor='green'
                                            onChange={this.imageChanges} ref={(ref) => { this.sign1 = ref }} canvasProps={{ width: 300, height: 100, className: 'sigCanvas' }} />
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
                                            onChange={this.imageChange} ref={(ref) => { this.sign2 = ref }} canvasProps={{ width: 300, height: 100, className: 'sigCanvas' }} />
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
        formData: state.formData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateData: (data) => dispatch(updateData(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Endtest);