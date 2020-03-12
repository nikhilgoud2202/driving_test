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
    return (
        <div className="Container ">
            <Card className="card-border">
                <CardBody>
                    <header class="panel-heading">

                        <h4 class="panel-title">End Test Information:</h4>
                    </header>
                    <form >

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputZip"> Test End Time</label>
                                <input type="time" class="form-control" placeholder="Test  End Time" required />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputZip">End Odometer</label>
                                <input type="number" class="form-control" placeholder=" End Odometer Reading" required />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputZip"> Total Odometer Points</label>
                                <input type="number" class="form-control" placeholder=" Total Odometer Points" required />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputZip">Total Points</label>
                                <input type="number" class="form-control" placeholder=" Total Points" required />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputZip">Qualified</label>
                                <input type="text" class="form-control" placeholder="Qualified" required />
                            </div>

                            <div class="form-group col-md-12">
                                <label for="inputZip">End Location</label>
                                <input type="text" class="form-control" placeholder="End Location" required />
                            </div>

                            <div class="form-group col-md-12">
                                <label for="exampleFormControlTextarea1">Comment Section:</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleFormControlTextarea1">Driver Signature:</label>
                                <SignatureCanvas penColor='green'
                                    canvasProps={{ width: 300, height: 100, className: 'sigCanvas' }} />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleFormControlTextarea1">Examiner Signature:</label>
                                <SignatureCanvas penColor='green'
                                    canvasProps={{ width: 300, height: 100, className: 'sigCanvas' }} />
                            </div>

                            <div class="form-group col-md-12">

                                <button type="submit" class="btn btn-primary  pull-right">End Test</button>


                            </div>
                        </div>




                    </form>




                </CardBody>
            </Card>


        </div>
    )
}
export default Endtest;