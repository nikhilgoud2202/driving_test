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



class Couplingandcoupling extends Component {
    constructor(props) {
        super(props)
        this.state = {
            P2_Q1_Se: '',
            P2_Q1_Sc: '',
            P2_Q2_Se: '',
            P2_Q2_Sc: '',
            P2_Q3_Se: '',
            P2_Q3_Sc: '',
            P2_Q2_Se: '',
            P2_Q2_Sc: '',
            P2_Q5_Se: '',
            P2_Q5_Sc: '',
            P2_Q6_Se: '',
            P2_Q6_Sc: '',
            P2_Q7_Se: '',
            P2_Q7_Sc: '',
            P2_Q8_Se: '',
            P2_Q8_Sc: '',
            P2_Com: '',
            P2_total_Sc: ''
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

                                <h2 class="panel-title"> COUPLING AND UNCOUPLING:</h2>
                            </header>
                            <FormGroup row>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Lines up units properly:</label>

                                        <select class="form-control" valu={this.state.P2_Q1_Se} name="P2_Q1_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" valu={this.state.P2_Q1_Sc} name="P2_Q1_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Connects airlines and light cords correctly to apply trailer brakes before coupling :</label>
                                        <select class="form-control" valu={this.state.P2_Q2_Se} name="P2_Q2_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" valu={this.state.P2_Q2_Sc} name="P2_Q2_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Connect glad hands and light line properly:</label>

                                        <select class="form-control" valu={this.state.P2_Q3_Se} name="P2_Q3_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" valu={this.state.P2_Q3_Sc} name="P2_Q3_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Backs slowly and couples without difficulty :</label>
                                        <select class="form-control" valu={this.state.P2_Q4_Se} name="P2_Q4_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>


                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" valu={this.state.P2_Q4_Sc} name="P2_Q4_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Raises landing gear fully after coupling and stows handle securely:</label>

                                        <select class="form-control" valu={this.state.P2_Q5_Se} name="P2_Q5_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" valu={this.state.P2_Q5_Sc} name="P2_Q5_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-provide_age_proof">Visually checks king pin assembly to be certain jaws are locked:</label>
                                        <select class="form-control" valu={this.state.P2_Q6_Se} name="P2_Q6_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" valu={this.state.P2_Q6_Sc} name="P2_Q6_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>

                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Checks coupling by applying hand valve (spike) and perform a stretch test:</label>
                                        <select class="form-control" valu={this.state.P2_Q7_Se} name="P2_Q7_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" valu={this.state.P2_Q7_Sc} name="P2_Q7_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">

                                    <div class="form-group col-md-12">
                                        <label class="col-sm-12 control-label" for="w6-worked_before">Assures that a surface will support trailer before uncoupling:</label>
                                        <select class="form-control" valu={this.state.P2_Q8_Se} name="P2_Q8_Se" onChange={this.handleChange} >
                                            <option value="">Select Choice</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="N.A">N.A</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" valu={this.state.P2_Q8_Sc} name="P2_Q8_Sc" onChange={this.handleChange} placeholder="Add Score" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label class="col-sm-12 control-label" for="w6-worked_before"> Coupling And Uncoupling Total Score:</label>
                                    <div class="form-group col-md-12">
                                        <input type="number" class="form-control" valu={this.state.P2_total_Sc} name="P2_total_Sc" onChange={this.handleChange} placeholder="Total Score" />
                                    </div>
                                </div>

                                <div class="form-group col-md-12">
                                    <div class="form-group col-md-12">
                                        <label for="exampleFormControlTextarea1">Comment Section:</label>
                                        <textarea class="form-control" valu={this.state.P2_Com} name="P2_Com" onChange={this.handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
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
    }
};

Couplingandcoupling.propTypes = {

    handleSubmit: PropTypes.func,
    previousPage: PropTypes.func
};

export default reduxForm({
    form: 'drivingtestform',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(Couplingandcoupling);
