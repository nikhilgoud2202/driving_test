import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    Button,
    Card,
    CardBody,
    Col,
    FormGroup
} from 'reactstrap';


import { connect } from "react-redux";
import { updateData } from "../redux/actions/index"



class Slowingstopping extends Component {
    constructor(props) {
        super(props)
        this.state = {
            P5_total_Sc: 0,
            tres: {}
        }
    }

    componentDidMount() {
        console.log(this.props)
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
        this.props.updateData({ P5_total_Sc: res });

    }
    render() {
        const { handleSubmit, pristine, previousPage, submitting, formData } = this.props;
        return (
            <form>
                <Col sm="12">
                    <Card className="card-border">
                        <CardBody>
                            <header class="panel-heading">

                                <h4 class="panel-title">SLOWING AND STOPPING:</h4>
                            </header>
                            <FormGroup row>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Gears down properly approaching a stop:</label>

                                        <select class="form-control" value={formData.P5_Q1_Se} name="P5_Q1_Se" onChange={this.handleChangeText}  >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P5_Q1_Sc} name="P5_Q1_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Starts on a grade without rolling back:</label>
                                        <select class="form-control" value={formData.P5_Q2_Se} name="P5_Q2_Se" onChange={this.handleChangeText} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P5_Q2_Sc} name="P5_Q2_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Uses mirrors to check traffic behind unit:</label>

                                        <select class="form-control" value={formData.P5_Q3_Se} name="P5_Q3_Se" onChange={this.handleChangeText} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P5_Q3_Sc} name="P5_Q3_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Avoids sudden stops:</label>
                                        <select class="form-control" value={formData.P5_Q4_Se} name="P5_Q4_Se" onChange={this.handleChangeText} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>


                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P5_Q4_Sc} name="P5_Q4_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Stops smoothly without excessive fanning:</label>

                                        <select class="form-control" value={formData.P5_Q5_Se} name="P5_Q5_Se" onChange={this.handleChangeText} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P5_Q5_Sc} name="P5_Q5_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Stops well behind stop line:</label>
                                        <select class="form-control" value={formData.P5_Q6_Se} name="P5_Q6_Se" onChange={this.handleChangeText} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P5_Q6_Sc} name="P5_Q6_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>

                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Does not encroach on pedestrian’s crosswalk:</label>
                                        <select class="form-control" value={formData.P5_Q7_Se} name="P5_Q7_Se" onChange={this.handleChangeText} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" value={formData.P5_Q7_Sc} name="P5_Q7_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label class="col-sm-12 control-label" for="w6-worked_before">Slowing And Stopping Total Score:</label>
                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" disabled value={formData.P5_total_Sc} name="P5_total_Sc" onChange={this.handleChange} placeholder="Total Score" />
                                    </div>
                                </div>

                                <div class="form-group col-md-12">
                                    <div class="form-group col-md-12">
                                        <label for="exampleFormControlTextarea1">Comment Section:</label>
                                        <textarea class="form-control" value={formData.P5_Com} name="P5_Com" onChange={this.handleChangeText} id="exampleFormControlTextarea1" rows="3"></textarea>
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
Slowingstopping.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Slowingstopping);
