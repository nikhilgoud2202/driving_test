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
import { render } from 'react-dom';



class Backingparking extends Component {
    constructor(props) {
        super(props)
        this.state = {
            P4_Q1_Se: '',
            P4_Q1_Sc: '',
            P4_Q2_Se: '',
            P4_Q2_Sc: '',
            P4_Q3_Se: '',
            P4_Q3_Sc: '',
            P4_Q4_Se: '',
            P4_Q4_Sc: '',
            P4_Q5_Se: '',
            P4_Q5_Sc: '',
            P4_Q6_Se: '',
            P4_Q6_Sc: '',
            P4_Q7_Se: '',
            P4_Q7_Sc: '',
            P4_Com: '',
            P4_total_Sc: '',
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        alert(this.state.P4_Q1_Sc)
    }
    render() {
        const { handleSubmit, pristine, previousPage, submitting } = this.props;
        console.log(this.P4_Q1_Se)
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

                                        <select class="form-control" name="P4_Q1_Se" value={this.state.P4_Q1_Se} onChange={this.handleChange}  >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" name="P4_Q1_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Rolls down window to listen for danger while backing:</label>
                                        <select class="form-control" name="P4_Q2_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" name="P4_Q2_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Looks back as well as uses mirrors while backing:</label>

                                        <select class="form-control" name="P4_Q3_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" name="P4_Q3_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Avoids backing from blind side:</label>
                                        <select class="form-control" name="P4_Q4_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>


                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" name="P4_Q4_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Signals when backing with horn and flashers:</label>

                                        <select class="form-control" name="P4_Q5_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" name="P4_Q5_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Controls speed and direction properly while backing :</label>
                                        <select class="form-control" name="P4_Q6_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" name="P4_Q6_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>

                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Secures unit with both parking brakes before exiting cab:</label>
                                        <select class="form-control" name="P4_Q7_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" name="P4_Q7_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>

                                </div>

                                <div className="form-group col-md-6">
                                    <label class="col-sm-12 control-label" for="w6-worked_before">Backing And Parking Total Score:</label>
                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" name="P4_total_Sc" onChange={this.handleChange} placeholder="Total Score" />
                                    </div>
                                </div>
                                <div class="form-group col-md-12">
                                    <div class="form-group col-md-12">
                                        <label for="exampleFormControlTextarea1">Comment Section:</label>
                                        <textarea class="form-control" name="P4_Com" onChange={this.handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
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
        )
    }
}

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