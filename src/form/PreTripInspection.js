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



class PreTripInspection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            P1_total_Sc: 0,
            tres: {}
        }
    }

    handleChangeText = (e) => {
        this.props.updateData({ [e.target.name]: e.target.value })  
    }

    handleChange = (e) => {
        this.props.updateData({ [e.target.name]: e.target.value })
        // var tres = parseFloat(this.props.formData.P1_Q1_Sc + this.props.formData.P1_Q2_Sc + this.props.formData.P1_Q3_Sc + this.props.formData.P1_Q4_Sc + this.props.formData.P1_Q5_Sc + this.props.formData.P1_Q6_Sc + this.props.formData.P1_Q7_Sc + this.props.formData.P1_Q8_Sc);
        this.state.tres[e.target.name] = parseFloat(e.target.value);
        console.log(this.state.tres)
        var res = 0;
        Object.keys(this.state.tres).forEach(element => {
            res = res + this.state.tres[element];
        });
        // var arr = Object.keys(this.state.tres);
        // arr.forEach(element => {
        //     console.log(element)
        // });
        // var res = this.state.tres["P1_Q1_Sc"] + this.state.tres["P1_Q2_Sc"] +
        // this.state.tres = this.state.tres + parseInt(e.target.value);
        this.props.updateData({ P1_total_Sc: res });

    }
    render() {
        const { handleSubmit, pristine, previousPage, submitting, formData } = this.props;
        return (
            <form>
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

                                        <select class="form-control" value={formData.P1_Q1_Se} name="P1_Q1_Se"
                                            onChange={this.handleChangeText}>
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" name="P1_Q1_Sc" onChange={this.handleChange} class="form-control" value={formData.P1_Q1_Sc} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Checks Under the hood – oil, coolant, general condition of Engine compartment:</label>
                                        <select class="form-control" value={formData.P1_Q2_Se} name="P1_Q2_Se" onChange={this.handleChangeText}>
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="number" name="P1_Q2_Sc" onChange={this.handleChange} class="form-control" value={formData.P1_Q2_Sc} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Checks around unit – tires, lights, trailer hook-up, Brake and light lines, body, doors :</label>

                                        <select class="form-control" value={formData.P1_Q3_Se} name="P1_Q3_Se" onChange={this.handleChangeText}>
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" name="P1_Q3_Sc" onChange={this.handleChange} class="form-control" value={formData.P1_Q3_Sc} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Checks brake action, tractor protection valve, and parking (hand) brake:</label>
                                        <select class="form-control" value={formData.P1_Q4_Se} name="P1_Q4_Se" onChange={this.handleChangeText} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>


                                    <div class="form-group col-md-12">
                                        <input type="number" name="P1_Q4_Sc" onChange={this.handleChange} class="form-control" value={formData.P1_Q4_Sc} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Checks horn, windshield wipers, mirrors, emergency Equipment, triangle reflectors, fire extinguisher:</label>

                                        <select class="form-control" value={formData.P1_Q5_Se} name="P1_Q5_Se" onChange={this.handleChangeText} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" name="P1_Q5_Sc" onChange={this.handleChange} class="form-control" value={formData.P1_Q5_Sc} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Checks instrument panel all gages for proper Functioning and demonstrates full understanding  :</label>
                                        <select class="form-control" value={formData.P1_Q6_Se} name="P1_Q6_Se" onChange={this.handleChangeText}>
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P1_Q6_Sc} name="P1_Q6_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>

                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Cleans windshield, windows, mirrors, lights, reflectors:</label>

                                        <select class="form-control" value={formData.P1_Q7_Se} name="P1_Q7_Se" onChange={this.handleChangeText} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P1_Q7_Sc} name="P1_Q7_Sc" onChange={this.handleChange} placeholder="Add Score" />                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Review all licenses permits and documents :</label>
                                        <select class="form-control" value={formData.P1_Q8_Se} name="P1_Q8_Se" onChange={this.handleChangeText} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-12" >
                                        <input type="number" class="form-control" value={formData.P1_Q8_Sc} name="P1_Q8_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6" >
                                    <label class="col-sm-12 control-label" for="w6-worked_before">Pre-Trip-Inspection Total Score:</label>
                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" disabled value={formData.P1_total_Sc} name="P1_total_Sc" onChange={this.handleChange} placeholder="Total Score" />
                                    </div>
                                </div>

                                <div class="form-group col-md-12">
                                    <div class="form-group col-md-12">
                                        <label for="exampleFormControlTextarea1">Comment Section:</label>
                                        <textarea class="form-control" value={formData.P1_Com} name="P1_Com" onChange={this.handleChangeText} id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>


                            </FormGroup>
                        </CardBody>
                        <div style={{ paddingBottom: 30 }}>

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

PreTripInspection.propTypes = {
    handleSubmit: PropTypes.func,

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

export default connect(mapStateToProps, mapDispatchToProps)(PreTripInspection);
