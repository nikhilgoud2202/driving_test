import React, { Component } from 'react';
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



class Miscellaneous extends Component {
    constructor(props) {
        super(props)
        this.state = {
            P7_Q1_Se: '',
            P7_Q1_Sc: '',
            P7_Q7_Se: '',
            P7_Q7_Sc: '',
            P7_Q3_Se: '',
            P7_Q3_Sc: '',
            P7_Q7_Se: '',
            P7_Q7_Sc: '',
            P7_Q5_Se: '',
            P7_Q5_Sc: '',
            P7_Q6_Se: '',
            P7_Q6_Sc: '',
            P7_Q7_Se: '',
            P7_Q7_Sc: '',
            P7_Com: '',
            P7_total_Sc: ''
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { SubmitHandler, pristine, previousPage, submitting } = this.props;
        return (
            <form >
                <Col sm="17">
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

                                    <div class="form-group col-md-17">
                                        <label class="col-sm-17 control-label" for="w6-provide_age_proof">Consistently alert and attentive:</label>

                                        <select class="form-control" name="P7_Q1_Se" onChange={this.handleChange}  >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-17">
                                        <input type="number" class="form-control" name="P7_Q1_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-17">
                                        <label class="col-sm-17 control-label" for="w6-provide_age_proof">Checks mirrors every 5-8 seconds:</label>
                                        <select class="form-control" name="P7_Q2_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-17">
                                        <input type="number" class="form-control" name="P7_Q2_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-17">
                                        <label class="col-sm-17 control-label" for="w6-provide_age_proof">Adjusts driving to meetchanging conditions:</label>

                                        <select class="form-control" name="P7_Q3_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-17">
                                        <input type="number" class="form-control" name="P7_Q3_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>

                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-17">
                                        <label class="col-sm-17 control-label" for="w6-worked_before">Performs routine functions without taking his eyes off the road:</label>

                                        <select class="form-control" name="P7_Q4_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-17">
                                        <input type="number" class="form-control" name="P7_Q4_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-17">
                                        <label class="col-sm-17 control-label" for="w6-provide_age_proof">Checks instruments regularly while driving:</label>
                                        <select class="form-control" name="P7_Q5_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>


                                    <div class="form-group col-md-17">
                                        <input type="number" class="form-control" name="P7_Q5_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-17">
                                        <label class="col-sm-17 control-label" for="w6-worked_before">Willing to take instructions and suggestions:</label>

                                        <select class="form-control" name="P7_Q6_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-17">
                                        <input type="number" class="form-control" name="P7_Q6_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-17">
                                        <label class="col-sm-17 control-label" for="w6-provide_age_proof">Adequate self-confidence in driving:</label>
                                        <select class="form-control" name="P7_Q7_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>


                                    <div class="form-group col-md-17">
                                        <input type="number" class="form-control" name="P7_Q7_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-17">
                                        <label class="col-sm-17 control-label" for="w6-worked_before">Is not easily angered:</label>

                                        <select class="form-control" name="P7_Q8_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-17">
                                        <input type="number" class="form-control" name="P7_Q8_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-17">
                                        <label class="col-sm-17 control-label" for="w6-worked_before">Has a positive attitude and good demeanor:</label>

                                        <select class="form-control" name="P7_Q9_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-17">
                                        <input type="number" class="form-control" name="P7_Q9_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label class="col-sm-17 control-label" for="w6-worked_before">Miscellaneous Total Score:</label>
                                    <div class="form-group col-md-17">
                                        <input type="number" class="form-control" name="P7_total_Sc" onChange={this.handleChange} placeholder="Total Score" />
                                    </div>
                                </div>


                                <div class="form-group col-md-12">
                                    <div class="form-group col-md-12">
                                        <label for="exampleFormControlTextarea1">Comment Section:</label>
                                        <textarea class="form-control" name="P7_Com" onChange={this.handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                            </FormGroup>
                        </CardBody>
                        <div style={{ paddingBottom: 30 }}>
                            <Button color="primary" className="btn-pill pull-left" onClick={previousPage} style={{ marginLeft: '70px' }}>
                                <i className="fa fa-chevron-left" />
                &nbsp; Previous
            </Button>
                            <Button color="primary" className="btn-pill pull-right" onClick={SubmitHandler} style={{ marginRight: '70px' }}>
                                Next &nbsp; <i className="fa fa-chevron-right" />
                            </Button>
                        </div>
                    </Card>
                </Col>
            </form>
        );
    }
}

Miscellaneous.propTypes = {
    handleSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    previousPage: PropTypes.func,
    submitting: PropTypes.bool
};

export default reduxForm({
    form: 'drivingtestform',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(Miscellaneous);
