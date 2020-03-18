
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
import './formstyle.css'
import { withRouter } from 'react-router-dom';
import Header from '../Header';

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

  SubmitHandler() {
    this.props.history.push('/end-test');
  }

  render() {

    const { onSubmit } = this.props;
    const { page, steps } = this.state;

    return (
      <div>
        <Header show={false} />
        <Card>

          <div class="form-row">
            <div class="form-group col-md-sm-12">
              <Stepper class="form-control" steps={steps} activeStep={page} /></div></div>
          {page === 0 && <PreTripInspection handleSubmit={this.nextPage} />}
          {page === 1 && (
            <Coupling
              previousPage={this.previousPage}
              handleSubmit={this.nextPage}
            />

          )}
          {page === 2 && (
            <PLACING
              previousPage={this.previousPage}
              handleSubmit={this.nextPage}
            />
          )}
          {page === 3 && (
            <BACKING
              previousPage={this.previousPage}
              handleSubmit={this.nextPage}
            />
          )}
          {page === 4 && (
            <SLOWING
              previousPage={this.previousPage}
              handleSubmit={this.nextPage}
            />
          )}
          {page === 5 && (
            <PASSING
              previousPage={this.previousPage}
              handleSubmit={this.nextPage}
            />
          )}


          {page === 6 && (
            <MISCELLANEOUS
              previousPage={this.previousPage}
              history={this.props.history}
            />
          )}
        </Card>
      </div>
    );
  }

}

Form.propTypes = {
  onSubmit: PropTypes.func
};

export default Form;

