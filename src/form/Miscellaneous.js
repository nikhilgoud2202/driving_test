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



const Miscellaneous = (props) => {

    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Col sm="12">
                <Card className="card-border">
                    <CardBody>
                        <header class="panel-heading">

                            <h4 class="panel-title">MISCELLANEOUS:</h4>
                        </header>
                        <header class="panel-heading">

                            <h5 class="panel-title">GENERAL DRIVING ABILITY AND HABITS:</h5>
                        </header>
                        <FormGroup row>
                            <div className="form-group col-md-6">

                                <div class="form-group col-md-12">
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Consistently alert and attentive:</label>

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
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Checks mirrors every 5-8 seconds:</label>
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
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Adjusts driving to meetchanging conditions:</label>

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
                                    <label class="col-sm-12 control-label" for="w6-worked_before">Performs routine functions without taking his eyes off the road:</label>

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
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Checks instruments regularly while driving:</label>
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
                                    <label class="col-sm-12 control-label" for="w6-worked_before">Willing to take instructions and suggestions:</label>

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
                                    <label class="col-sm-12 control-label" for="w6-provide_age_proof">Adequate self-confidence in driving:</label>
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
                                    <label class="col-sm-12 control-label" for="w6-worked_before">Is not easily angered:</label>

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
                                    <label class="col-sm-12 control-label" for="w6-worked_before">Has a positive attitude and good demeanor:</label>

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

Miscellaneous.propTypes = {
    handleSubmit: PropTypes.func
};

export default reduxForm({
    form: 'drivingtestform',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(Miscellaneous);
