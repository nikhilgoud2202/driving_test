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
import { Dispatch, AnyAction } from "redux";
import { connect } from "react-redux";
import { updateData } from "../redux/actions/index"




class Placingmotion extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount () {
        console.log(this.props)
    }
    handleChange = (e) => {
        this.props.updateData({ [e.target.name]: e.target.value })
    }
    render() {
        const { handleSubmit, pristine, previousPage, submitting, formData } = this.props;
        return (
            <form>
                <Col sm="12">
                    <Card className="card-border">
                        <CardBody>
                            <header class="panel-heading">

                                <h4 class="panel-title">PLACING VEHICLE MOTION AND USE OF CONTROLS:</h4>
                            </header>
                            <header class="panel-heading">

                                <h5 class="panel-title">A.ENGINE:</h5>
                            </header>
                            <FormGroup row>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Puts transmission in neutral, starts the engine with the clutch fully depressed:</label>

                                        <select class="form-control" value={formData.P3_A_Q1_Se} name="P3_A_Q1_Se" onChange={this.handleChange}  >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P3_A_Q1_Sc} name="P3_A_Q1_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Allows proper warm-up and scans gauges:</label>
                                        <select class="form-control" value={formData.P3_A_Q2_Se} name="P3_A_Q2_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P3_A_Q2_Sc} name="P3_A_Q2_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Maintains proper engine speed (rpm) while driving:</label>

                                        <select class="form-control" value={formData.P3_A_Q3_Se} name="P3_A_Q3_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P3_A_Q3_Sc} name="P3_A_Q3_Se" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Does not abuse engine by over-revving or lugging(running rmp too low):</label>
                                        <select class="form-control" value={formData.P3_A_Q4_Se} name="P3_A_Q4_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>


                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P3_A_Q4_Sc} name="P3_A_Q4_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>

                                <div class="form-group col-md-12">
                                    <div class="form-group col-md-12">
                                        <label for="exampleFormControlTextarea1">Comment Section:</label>
                                        <textarea class="form-control" value={formData.P3_A_Com} name="P3_A_Com" onChange={this.handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                            </FormGroup>
                            <header class="panel-heading">

                                <h5 class="panel-title">B.CLUTCH AND TRANSMISSION:</h5>
                            </header>
                            <FormGroup row>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Start loaded unit smoothly:</label>

                                        <select class="form-control" value={formData.P3_B_Q1_Se} name="P3_B_Q1_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P3_B_Q1_Sc} name="P3_B_Q1_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Uses clutch and times shifting properly:</label>
                                        <select class="form-control" value={formData.P3_B_Q2_Se} name="P3_B_Q2_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P3_B_Q1_Sc} name="P3_B_Q2_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Shifts gears smoothly and uses proper gear sequence:</label>

                                        <select class="form-control" value={formData.P3_B_Q3_Se} name="P3_B_Q3_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P3_B_Q3_Sc} name="P3_B_Q3_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Downshifts when approaching traffic lights:</label>
                                        <select class="form-control" value={formData.P3_B_Q3_Se} name="P3_B_Q3_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>


                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P3_B_Q3_Sc} name="P3_B_Q3_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>

                                <div class="form-group col-md-12">
                                    <div class="form-group col-md-12">
                                        <label for="exampleFormControlTextarea1">Comment Section:</label>
                                        <textarea class="form-control" value={formData.P3_B_Com} name="P3_B_Com" onChange={this.handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                            </FormGroup>
                            <header class="panel-heading">

                                <h5 class="panel-title">C.BRAKES:</h5>
                            </header>
                            <FormGroup row>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Knows proper use of protection valve:</label>

                                        <select class="form-control" value={formData.P3_C_Q1_Se} name="P3_C_Q1_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P3_C_Q1_Sc} name="P3_C_Q1_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Understands and tests low air warning device:</label>
                                        <select class="form-control" value={formData.P3_C_Q2_Se} name="P3_C_Q2_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P3_C_Q2_Sc} name="P3_C_Q2_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Tests Tractor, trailer and service brakes:</label>

                                        <select class="form-control" value={formData.P3_C_Q3_Se} name="P3_C_Q3_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P3_C_Q3_Sc} name="P3_C_Q3_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Builds full air pressure before moving:</label>
                                        <select class="form-control" value={formData.P3_C_Q4_Se} name="P3_C_Q4_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>


                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P3_C_Q4_Sc} name="P3_C_Q4_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>

                                <div class="form-group col-md-12">
                                    <div class="form-group col-md-12">
                                        <label for="exampleFormControlTextarea1">Comment Section:</label>
                                        <textarea class="form-control" value={formData.P3_C_Com} name="P3_C_Com" onChange={this.handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                            </FormGroup>
                            <header class="panel-heading">

                                <h5 class="panel-title">D.STEERING:</h5>
                            </header>
                            <FormGroup row>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Keeps both hand on wheel when not shifting:</label>

                                        <select class="form-control" value={formData.P3_D_Q1_Se} name="P3_D_Q1_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P3_D_Q1_Sc} name="P3_D_Q1_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Controls steering well, does not wonder in lane:</label>
                                        <select class="form-control" value={formData.P3_D_Q2_Se} name="P3_D_Q2_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P3_D_Q2_Sc} name="P3_D_Q2_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Good driving posture good grip on steering wheel:</label>

                                        <select class="form-control" value={formData.P3_D_Q3_Se} name="P3_D_Q3_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P3_D_Q3_Sc} name="P3_D_Q3_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label class="col-sm-12 control-label" for="w6-worked_before">Placing Motion Total Score:</label>
                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P3_total_Sc} name="P3_total_Sc" onChange={this.handleChange} placeholder="Total Score" />
                                    </div>
                                </div>

                                <div class="form-group col-md-12">
                                    <div class="form-group col-md-12">
                                        <label for="exampleFormControlTextarea1">Comment Section:</label>
                                        <textarea class="form-control" value={formData.P3_D_Com} name="P3_D_Com" onChange={this.handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                            </FormGroup>
                        </CardBody>
                        <div style={{ paddingBottom: 30 }}>
                            <Button color="primary" className="btn-pill pull-left" onClick={previousPage} style={{ marginLeft: '20px' }}>
                                <i className="fa fa-chevron-left" />
                                &nbsp; Previous
                            </Button>
                            <Button color="primary" className="btn-pill pull-right" onClick={handleSubmit} style={{ marginRight: '20px' }}>
                                Next &nbsp; <i className="fa fa-chevron-right" />
                            </Button>
                        </div>
                    </Card>
                </Col>
            </form>
        );
    };
}

Placingmotion.propTypes = {
    handleSubmit: PropTypes.func,
    previousPage: PropTypes.func
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Placingmotion) 
