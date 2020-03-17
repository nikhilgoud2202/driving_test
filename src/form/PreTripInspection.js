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



class PreTripInspection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            P1_Q1_Se: '',
            P1_Q1_Sc: '',
            P1_Q2_Se: '',
            P1_Q2_Sc: '',
            P1_Q3_Se: '',
            P1_Q3_Sc: '',
            P1_Q2_Se: '',
            P1_Q2_Sc: '',
            P1_Q5_Se: '',
            P1_Q5_Sc: '',
            P1_Q6_Se: '',
            P1_Q6_Sc: '',
            P1_Q7_Se: '',
            P1_Q7_Sc: '',
            P1_Q8_Se: '',
            P1_Q8_Sc: '',
            P1_Com: '',
            P1_total_Sc: ''
        }
    }
    handleChange = (e) => {

        this.setState({ [e.target.name]: e.target.value })
    }
    render() {

        const { handleSubmit, pristine, previousPage, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Col sm="12">
                    <Card className="card-border">
                        <CardBody>
                            <header class="panel-heading">

                                <h4 class="panel-title">PRE-TRIP INSPECTION:</h4>
                            </header>
                            <FormGroup row>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Checks general condition approaching unit looks for leads, oil, fuel, coolant etc:</label>

                                        <select class="form-control" value={this.state.P1_Q1_Se} name="P1_Q1_Se" onChange={this.handleChange}>
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" name="P1_Q1_Sc" onChange={this.handleChange} class="form-control" value={this.state.P1_Q1_Sc} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Checks Under the hood – oil, coolant, general condition of Engine compartment:</label>
                                        <select class="form-control" value={this.state.P1_Q2_Se} name="P1_Q2_Se" onChange={this.handleChange}>
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="number" name="P1_Q2_Sc" onChange={this.handleChange} class="form-control" value={this.state.P1_Q2_Sc} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Checks around unit – tires, lights, trailer hook-up, Brake and light lines, body, doors :</label>

                                        <select class="form-control" value={this.state.P1_Q3_Se} name="P1_Q3_Se" onChange={this.handleChange}>
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" name="P1_Q3_Sc" onChange={this.handleChange} class="form-control" value={this.state.P1_Q3_Sc} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Checks brake action, tractor protection valve, and parking (hand) brake:</label>
                                        <select class="form-control" value={this.state.P1_Q4_Se} name="P1_Q4_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>


                                    <div class="form-group col-md-12">
                                        <input type="number" name="P1_Q4_Sc" onChange={this.handleChange} class="form-control" value={this.state.P1_Q4_Sc} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Checks horn, windshield wipers, mirrors, emergency Equipment, triangle reflectors, fire extinguisher:</label>

                                        <select class="form-control" value={this.state.P1_Q5_Se} name="P1_Q5_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" name="P1_Q5_Sc" onChange={this.handleChange} class="form-control" value={this.state.P1_Q5_Sc} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Checks instrument panel all gages for proper Functioning and demonstrates full understanding  :</label>
                                        <select class="form-control" value={this.state.P1_Q6_Se} name="P1_Q6_Se" onChange={this.handleChange}>
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={this.state.P1_Q6_Sc} name="P1_Q6_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>

                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Cleans windshield, windows, mirrors, lights, reflectors:</label>

                                        <select class="form-control" value={this.state.P1_Q7_Se} name="P1_Q7_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={this.state.P1_Q7_Se} name="P1_Q7_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Review all licenses permits and documents :</label>
                                        <select class="form-control" value={this.state.P1_Q8_Se} name="P1_Q8_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-12" >
                                        <input type="number" class="form-control" value={this.state.P1_Q8_Sc} name="P1_Q8_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6" >
                                    <label class="col-sm-12 control-label" for="w6-worked_before">Pre-Trip-Inspection Total Score:</label>
                                    <div class="form-group col-md-12">
                                        <input type="number" value={this.state.P1_total_Sc} class="form-control" value={this.state.P1_Q1_Se} placeholder="Total Score" />
                                    </div>
                                </div>

                                <div class="form-group col-md-12">
                                    <div class="form-group col-md-12">
                                        <label for="exampleFormControlTextarea1">Comment Section:</label>
                                        <textarea class="form-control" value={this.state.P1_Com} name="P1_Com" onChange={this.handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
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
}

PreTripInspection.propTypes = {
    handleSubmit: PropTypes.func
};

export default reduxForm({
    form: 'drivingtestform',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(PreTripInspection);
