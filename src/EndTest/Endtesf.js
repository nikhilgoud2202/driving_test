import React, { useState } from 'react';
import SignatureCanvas from 'react-signature-canvas'
import {
    Button,
    Card,
    CardBody,
    Col,
    FormGroup
} from 'reactstrap';
import './endstyle.css';

function Endtest(props) {
    let [sign1, setSign1] = useState('')
    let [sign2, setSign2] = useState('')
    let [endTime, setEndTime] = useState('')
    let [endOdameter, setEndOdameter] = useState('')
    let [endLocation, setEndLocation] = useState('')
    let [totalKm, setTotalKm] = useState('')
    let [totalPoints, setTotalPoints] = useState('')
    let [qualified, setQualified] = useState('');
    let [examinerComment, setExaminerComment] = useState('');
    let [driverComment, setDriverComment] = useState('')


    let Signone = () => {
        sign1.clear()
    }
    let Signtwo = () => {
        sign2.clear()
    }
    let EndHandler = (e) => {
        e.preventDefault();
        let end_data = {

        }
        // axios.post("https://drivingtest.herokuapp.com/addTestInformation",
        //     end_data
        // )
        //     .then(
        //         resp => {

        //             console.log(resp.data)
        //         })

    }
    return (
        <div className="Container ">
            <Card className="card-border">
                <CardBody>
                    <header class="panel-heading">

                        <h4 class="panel-title">End Test Information:</h4>
                    </header>
                    <form onSubmit={EndHandler}>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputZip"> Test End Time</label>
                                <input type="time" class="form-control" placeholder="Test  End Time" required />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputZip">End Odometer</label>
                                <input type="number" class="form-control" placeholder=" End Odometer Reading" required />
                            </div>
                            <div class="form-group col-md-12">
                                <label for="inputZip">End Location</label>
                                <input type="text" class="form-control" placeholder="End Location" required />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputZip">Total Kilometers Driven</label>
                                <input type="number" class="form-control" placeholder="Total Kilometers Driven" required />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputZip">Total Points</label>
                                <input type="number" class="form-control" placeholder=" Total Points" required />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputZip">Qualified</label>

                                <select class="form-control" required>
                                    <option value="">Select Choice</option>
                                    <option value="Qualified">Qualified</option>
                                    <option value="Not Qualified">Not Qualified</option>
                                    <option value="Company to Decide">Company to Decide</option>
                                </select>
                            </div>



                            <div class="form-group col-md-12">
                                <label for="exampleFormControlTextarea1">Examiner Comment Section:</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleFormControlTextarea1">Examiner Signature:</label>
                                <SignatureCanvas penColor='green'
                                    ref={(ref) => { setSign1(ref) }} canvasProps={{ width: 300, height: 100, className: 'sigCanvas' }} />
                            </div>
                            <div class="form-group col-md-6 sign-btn">
                                <a class="btn btn-primary  pull-center" onClick={Signone}>Clear Signature</a>

                            </div>
                            <div class="form-group col-md-12 ">
                                <label for="exampleFormControlTextarea1">Driver Comment Section:</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleFormControlTextarea1">Driver Signature:</label>
                                <SignatureCanvas penColor='green'
                                    ref={(ref) => { setSign2(ref) }} canvasProps={{ width: 300, height: 100, className: 'sigCanvas' }} />
                            </div>

                            <div class="form-group col-md-6 sign-btn">

                                <a class="btn btn-primary  pull-center" onClick={Signtwo} >Clear Signature</a>
                            </div>


                            <div class="form-group col-md-12">
                                <button type="submit" class="btn btn-primary  pull-right" >End Test</button>

                            </div>
                        </div>




                    </form>




                </CardBody>
            </Card>


        </div>
    )
}
export default Endtest;