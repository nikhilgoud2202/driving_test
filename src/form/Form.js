import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stepper from 'react-stepper-horizontal';
import { Card } from 'reactstrap';
import PreTripInspection from './PreTripInspection';
<<<<<<< Updated upstream
=======
import PersonalDetailsForm from './PersonalDetailsForm';
import NomineeDetailsForm from './NomineeDetailsForm';
>>>>>>> Stashed changes
import Coupling from './Couplinganduncoupling'
import PLACING from './Placingmotion'
import BACKING from './Backingparking'
import SLOWING from './Slowingstopping'
import PASSING from './Passingtrning'
import MISCELLANEOUS from './Miscellaneous'
<<<<<<< Updated upstream
import './formstyle.css'
=======
>>>>>>> Stashed changes

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

  render() {

    const { onSubmit } = this.props;
    const { page, steps } = this.state;

    return (
      <Card>
<<<<<<< Updated upstream

        <div class="form-row">
          <div class="form-group col-md-sm-12">
            <Stepper class="form-control" steps={steps} activeStep={page} /></div></div>
        {page === 0 && <PreTripInspection onSubmit={this.nextPage} />}
        {page === 1 && (
          <Coupling
=======
        <Stepper steps={steps} activeStep={page} />
        {page === 0 && <PreTripInspection onSubmit={this.nextPage} />}
        {page === 1 && (
          <Coupling
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <PLACING
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 4 && (
          <BACKING
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 5 && (
          <SLOWING
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 6 && (
          <PASSING
>>>>>>> Stashed changes
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
          // <MISCELLANEOUS
          //   previousPage={this.previousPage}
          //   onSubmit={this.nextPage}
          // />
        )}
<<<<<<< Updated upstream
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
=======



        {page === 7 && (
          <MISCELLANEOUS
>>>>>>> Stashed changes
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
            onSubmit={this.SubmitHandler}

          />
        )}
      </Card>
    );
  }

}

Form.propTypes = {
  onSubmit: PropTypes.func
};

export default Form;
