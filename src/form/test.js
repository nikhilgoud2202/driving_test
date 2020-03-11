import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stepper from 'react-stepper-horizontal';
import { Card } from 'reactstrap';
import PreTripInspection from './PreTripInspection';
import Coupling from './Couplinganduncoupling'
import PLACING from './Placingmotion'
import BACKING from './Backingparking'
import SLOWING from './Slowingstopping'
import PASSING from './Passingtrning'
import MISCELLANEOUS from './Miscellaneous'

class Form extends Component {

    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.state = {
            page: 0,
            steps: [

                { title: 'PRE-TRIP INSPECTION' },
                { title: 'COUPLING AND UNCOUPLING' },
                { title: 'PLACING VEHICLE IN MOTION AND USE OFCONTROLS' },
                { title: 'BACKING AND PARKING' },
                { title: 'SLOWING AND STOPPING' },
                { title: 'OPERATING IN TRAFFIC: PASSING AND TURNING' },
                { title: ' MISCELLANEOUS' }
            ]
        };
    }

    nextPage() {
        this.setState({ page: this.state.page + 1 });
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 });
    }


  
    const { onSubmit } = this.props;
const { page, steps } = this.state;

return (
    <Card>
        <Stepper steps={steps} activeStep={page} />
        {page === 0 && <PreTripInspection onSubmit={this.nextPage} />}
        {page === 1 && (
            <Coupling
                previousPage={this.previousPage}
                onSubmit={this.nextPage}
            />
        )}
        {page === 2 && (
            <PLACING
                previousPage={this.previousPage}
                onSubmit={this.nextPage}
            />
        )}
        {page === 3 && (
            <BACKING
                previousPage={this.previousPage}
                onSubmit={this.nextPage}
            />
        )}
        {page === 4 && (
            <SLOWING
                previousPage={this.previousPage}
                onSubmit={this.nextPage}
            />
        )}
        {page === 5 && (
            <PASSING
                previousPage={this.previousPage}
                onSubmit={this.nextPage}
            />
        )}



        {page === 6 && (
            <MISCELLANEOUS
                previousPage={this.previousPage}
                onSubmit={onSubmit}
            />
        )}
    </Card>
);
  

}

Form.propTypes = {
    onSubmit: PropTypes.func
};

export default Form;