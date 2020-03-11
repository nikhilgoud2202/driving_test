import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validation/validation';
import {
    Button,
    Card,
    CardBody,
    Col,
    FormGroup
} from 'reactstrap';
import {
    captialize,
} from '../validation/normalize';
import Select from '../components/FormInput/FormSelect';
import FormInput from '../components/FormInput/FormInput';



const Passingturning = (props) => {

    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Col sm="12">
                <Card className="card-border">
                    <CardBody>
                        <header class="panel-heading">

                            <h4 class="panel-title">OPERATING IN TRAFFIC PASSING AND TURNING:</h4>
                        </header>
                        <header class="panel-heading">

                            <h5 class="panel-title">A.TURNING:</h5>
                        </header>
                        <FormGroup row>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Signals intention well in advance:</label>

                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>

                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Selects proper lane well in advance of turn:</label>
                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-worked_before">Checks traffic condition and turns only when intersection is clear:</label>

                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>

                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Restricts traffic on right when making a right turn:</label>
                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>


                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-worked_before">Completes turns into the proper lane and does not impede other traffic:</label>

                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>

                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>

                            <div class="form-group col-md-12">
                                <div class="form-group col-md-12">
                                    <label for="exampleFormControlTextarea1">Comment Section:</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                        </FormGroup>
                        <header class="panel-heading">

                            <h5 class="panel-title">B.TRAFFIC SIGNS AND SIGNALS:</h5>
                        </header>
                        <FormGroup row>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Approaches signals prepared to stop if necessary:</label>

                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>

                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Uses good judgement on yellow light:</label>
                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-worked_before">Starts smoothly on green:</label>

                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>

                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Obeys all traffic signals:</label>
                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>


                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-worked_before">Notices and obeys traffic signals:</label>

                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>

                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>

                            <div class="form-group col-md-12">
                                <div class="form-group col-md-12">
                                    <label for="exampleFormControlTextarea1">Comment Section:</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                        </FormGroup>


                        <header class="panel-heading">

                            <h5 class="panel-title">C.INTERSECTIONS:</h5>
                        </header>
                        <FormGroup row>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Approaches intersections prepared to stop:</label>

                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>

                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Checks for cross traffic regardless of traffic control:</label>
                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>

                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-worked_before">Yields right of way for safety:</label>

                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>

                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>

                            <div class="form-group col-md-12">
                                <div class="form-group col-md-12">
                                    <label for="exampleFormControlTextarea1">Comment Section:</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                        </FormGroup>


                        <header class="panel-heading">

                            <h5 class="panel-title">D.RAIL ROAD CROSSING:</h5>
                        </header>
                        <FormGroup row>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Adjusts speed to conditions:</label>

                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>

                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Makes safe stop if required:</label>
                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-worked_before">Selects proper gear and does not shifts while crossing:</label>

                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>

                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Knows and understands RR X stopping distance:</label>
                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>


                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>


                            <div class="form-group col-md-12">
                                <div class="form-group col-md-12">
                                    <label for="exampleFormControlTextarea1">Comment Section:</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                        </FormGroup>

                        <header class="panel-heading">

                            <h5 class="panel-title">E.PASSING:</h5>
                        </header>
                        <FormGroup row>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Passes with enough clear space ahead:</label>

                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>

                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Does not pass in unsafe location, hill, curve, intersection:</label>
                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-worked_before">Signals lane change:</label>

                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>

                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Does not tail gate:</label>
                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>


                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-worked_before">Does not block traffic with slow pass:</label>

                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>

                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-worked_before">Allows enough space when returning to right lane:</label>

                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>

                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>


                            <div class="form-group col-md-12">
                                <div class="form-group col-md-12">
                                    <label for="exampleFormControlTextarea1">Comment Section:</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                        </FormGroup>
                        <header class="panel-heading">

                            <h5 class="panel-title">F.SPEED CONTROL:</h5>
                        </header>
                        <FormGroup row>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Speed consistent with basic ability:</label>

                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>

                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Adjusts speed to road, weather, traffic conditions:</label>
                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-worked_before">Slows down on rough roads:</label>

                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>

                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Slows down in advance of curves, intersections and exit ramps:</label>
                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>


                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-worked_before">Maintenance constant speed and proper following distance:</label>

                                    <select class="form-control" required>
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>

                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" required />
                                </div>
                            </div>

                            <div class="form-group col-md-12">
                                <div class="form-group col-md-12">
                                    <label for="exampleFormControlTextarea1">Comment Section:</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                        </FormGroup>





                    </CardBody>
                    <div style={{ paddingBottom: 30 }}>
                        <Button color="primary" className="btn-pill pull-right" type="submit" style={{ marginRight: '20px' }}>
                            Next &nbsp; <i className="fa fa-chevron-right" />
                        </Button>
                    </div>
                </Card>
            </Col>
        </form>
    );
};

Passingturning.propTypes = {
    handleSubmit: PropTypes.func
};

export default reduxForm({
    form: 'drivingtestform',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(Passingturning);