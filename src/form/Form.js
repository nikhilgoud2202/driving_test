
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
import { connect } from "react-redux";

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
        { title: 'PLACING VEHICLE IN MOTION AND USE OF CONTROLS' },
        { title: 'BACKING AND PARKING' },
        { title: 'SLOWING AND STOPPING' },
        { title: 'OPERATING IN TRAFFIC: PASSING AND TURNING' },
        { title: ' MISCELLANEOUS' }
      ]
    };

  }
  componentDidMount() {
    const { licenseNumber, startTime } = this.props.localData;
    if (!localStorage.userID) {
      this.props.history.push("/");
    }
    else if (!licenseNumber) {
      this.props.history.push("/driverlogin");
    } else if (!startTime) {
      this.props.history.push("/driverinfo");
    }
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

  handlePage = (e) => {
    this.setState({
      page: +e.target.value
    })
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
              <Stepper class="form-control" steps={steps} activeStep={page} /></div>
          </div>
          <div className="w-100">
            <div class="form-group col-md-4 pull-right">
              <select class="form-control" name="P2_Q1_Se" onChange={this.handlePage} >
                <option value="0">GO TO</option>
                <option value="0">PRE-TRIP INSPECTION</option>
                <option value="1">COUPLING AND UNCOUPLING</option>
                <option value="2">PLACING VEHICLE IN MOTION AND USE OFCONTROLS</option>
                <option value="3">BACKING AND PARKING</option>
                <option value="4">SLOWING AND STOPPING</option>
                <option value="5">OPERATING IN TRAFFIC: PASSING AND TURNING</option>
                <option value="6">MISCELLANEOUS</option>
              </select>
            </div>
          </div>
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

const mapStateToProps = state => {
  return {
    localData: state.localData
  }
}

export default connect(mapStateToProps)(Form);

