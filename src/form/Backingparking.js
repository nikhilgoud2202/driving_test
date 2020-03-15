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



const Backingparking = (props) => {

    const { handleSubmit, pristine, previousPage, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Col sm="12">
                <Card className="card-border">
                    <CardBody>
                        <header class="panel-heading">

                            <h4 class="panel-title">BACKING AND PARKING:</h4>
                        </header>
                        <FormGroup row>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Gets out and looks before backing:</label>

                                    <select class="form-control" >
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>

                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Rolls down window to listen for danger while backing:</label>
                                    <select class="form-control" >
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-worked_before">Looks back as well as uses mirrors while backing:</label>

                                    <select class="form-control" >
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>

                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Avoids backing from blind side:</label>
                                    <select class="form-control" >
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>


                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-worked_before">Signals when backing with horn and flashers:</label>

                                    <select class="form-control" >
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>

                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" />
                                </div>
                            </div>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Controls speed and direction properly while backing :</label>
                                    <select class="form-control" >
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" />
                                </div>
                            </div>

                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-worked_before">Secures unit with both parking brakes before exiting cab:</label>
                                    <select class="form-control" >
                                        <option value="">Select Choice</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N.A">N.A</option>
                                    </select>
                                </div>

                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Add Score" />
                                </div>

                            </div>

                            <div className="form-group col-md-6">
                                <label class="col-sm-12 control-label" for="w6-worked_before">Backing And Parking Total Score:</label>
                                <div class="form-group col-md-12">
                                    <input type="number" class="form-control" placeholder="Total Score" />
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
                        <Button color="primary" className="btn-pill pull-left" onClick={previousPage} style={{ marginLeft: '20px' }}>
                            <i className="fa fa-chevron-left" />
                &nbsp; Previous
            </Button>
                        <Button color="primary" className="btn-pill pull-right" type="submit" style={{ marginRight: '20px' }}>
                            Next &nbsp; <i className="fa fa-chevron-right" />
                        </Button>
                    </div>
                </Card>
            </Col>
        </form>
    );
};

Backingparking.propTypes = {
    handleSubmit: PropTypes.func,
    previousPage: PropTypes.func
};

export default reduxForm({
    form: 'drivingtestform',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(Backingparking);