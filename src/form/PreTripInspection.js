import React from 'react';
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



const PreTripInspection = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Col sm="12">
                <Card className="card-border">
                    <CardBody>
                        <FormGroup row>
                            <Col xs="6" lg="3">
                                <Field
                                    name="question1"
                                    label="Pre Inspection question 1"
                                    component={Select}
                                    options={{
                                        yes: 'Yes',
                                        no: 'No',
                                        na: 'NA'
                                    }}
                                />
                            </Col>
                            <Col xs="3" lg="2">
                                <Field
                                    name="name"
                                    type="text"
                                    component={FormInput}
                                    inputPlaceHolder="score"
                                    normalize={captialize}
                                />
                            </Col>
                            <Col xs="6" lg="3">
                                <Field
                                    name="question2"
                                    label="Pre Inspection question 2"
                                    component={Select}
                                    options={{
                                        yes: 'Yes',
                                        no: 'No',
                                        na: 'NA'
                                    }}
                                />
                            </Col>
                            <Col xs="3" lg="2">
                                <Field
                                    name="name"
                                    type="text"
                                    component={FormInput}
                                    inputPlaceHolder="score"
                                    normalize={captialize}
                                />
                            </Col>
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

PreTripInspection.propTypes = {
    handleSubmit: PropTypes.func
};

export default reduxForm({
    form: 'drivingtestform',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(PreTripInspection);
