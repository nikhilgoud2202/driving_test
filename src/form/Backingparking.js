import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import {
    Button,
    Card,
    CardBody,
    Col,
    FormGroup
} from 'reactstrap';


import { Dispatch, AnyAction } from "redux";
import { connect } from "react-redux";
import { updateData } from "../redux/actions/index"



class Backingparking extends Component {
    constructor(props) {
        super(props)
        this.state = {
            P4_total_Sc: 0,
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
        this.props.updateData({ P4_total_Sc: res });

    }
    render() {
        const { handleSubmit, pristine, previousPage, submitting, formData } = this.props;

        console.log(formData)
        return (
            <form>
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

                                        <select class="form-control" value={formData.P4_Q1_Se} name="P4_Q1_Se" onChange={this.handleChangeText}  >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P4_Q1_Sc} name="P4_Q1_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Rolls down window to listen for danger while backing:</label>
                                        <select class="form-control" value={formData.P4_Q2_Se} name="P4_Q2_Se" onChange={this.handleChangeText} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P4_Q2_Sc} name="P4_Q2_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Looks back as well as uses mirrors while backing:</label>

                                        <select class="form-control" value={formData.P4_Q3_Se} name="P4_Q3_Se" onChange={this.handleChangeText} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P4_Q3_Sc} name="P4_Q3_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Avoids backing from blind side:</label>
                                        <select class="form-control" value={formData.P4_Q4_Se} name="P4_Q4_Se" onChange={this.handleChangeText} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>


                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P4_Q4_Sc} name="P4_Q4_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Signals when backing with horn and flashers:</label>

                                        <select class="form-control" value={formData.P4_Q5_Se} name="P4_Q5_Se" onChange={this.handleChangeText} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P4_Q5_Sc} name="P4_Q5_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Controls speed and direction properly while backing :</label>
                                        <select class="form-control" value={formData.P4_Q6_Se} name="P4_Q6_Se" onChange={this.handleChangeText} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P4_Q6_Sc} name="P4_Q6_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>

                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Secures unit with both parking brakes before exiting cab:</label>
                                        <select class="form-control" value={formData.P4_Q7_Se} name="P4_Q7_Se" onChange={this.handleChangeText} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P4_Q7_Sc} name="P4_Q7_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>

                                </div>

                                <div className="form-group col-md-6">
                                    <label class="col-sm-12 control-label" for="w6-worked_before">Backing And Parking Total Score:</label>
                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" disabled value={formData.P4_total_Sc} name="P4_total_Sc" onChange={this.handleChange} placeholder="Total Score" />
                                    </div>
                                </div>
                                <div class="form-group col-md-12">
                                    <div class="form-group col-md-12">
                                        <label for="exampleFormControlTextarea1">Comment Section:</label>
                                        <textarea class="form-control" value={formData.P4_Com} name="P4_Com" onChange={this.handleChangeText} id="exampleFormControlTextarea1" rows="3"></textarea>
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
        )
    }
}

Backingparking.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(Backingparking);