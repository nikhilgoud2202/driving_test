import React, { useState } from 'react';
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

const Form = (props) => {


    let [nextPage, setNextPage] = useState(nextPage.bind())
    let [previousPage, setPreviousPage] = useState(previousPage.bind())

    let [page, setPage] = useState(0)
    let [steps, setSteps] = useState[{ title: 'PRE-TRIP INSPECTION' },
        { title: 'COUPLING AND UNCOUPLING' },
        { title: 'PLACING VEHICLE IN MOTION AND USE OFCONTROLS' },
        { title: 'BACKING AND PARKING' },
        { title: 'SLOWING AND STOPPING' },
        { title: 'OPERATING IN TRAFFIC: PASSING AND TURNING' },
        { title: ' MISCELLANEOUS' }]




    nextPage = () => {
        setNextPage(page + 1)

    }

    previousPage = () => {
        setPreviousPage(page - 1)

    }
    import React, { useState } from 'react';
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

    const Form = (props) => {


        let [nextPage, setNextPage] = useState(nextPage.bind())
        let [previousPage, setPreviousPage] = useState(previousPage.bind())

        let [page, setPage] = useState(0)
        let [steps, setSteps] = useState[{ title: 'PRE-TRIP INSPECTION' },
            { title: 'COUPLING AND UNCOUPLING' },
            { title: 'PLACING VEHICLE IN MOTION AND USE OFCONTROLS' },
            { title: 'BACKING AND PARKING' },
            { title: 'SLOWING AND STOPPING' },
            { title: 'OPERATING IN TRAFFIC: PASSING AND TURNING' },
            { title: ' MISCELLANEOUS' }]




        nextPage = () => {
            setNextPage(page + 1)

        }

        previousPage = () => {
            setPreviousPage(page - 1)

        }
        let SubmitHandler = () => {
            alert("hi")
        }




        const { onSubmit } = props;


        return (
            <Card>

                <div class="form-row">
                    <div class="form-group col-md-sm-12">
                        <Stepper class="form-control" steps={steps} activeStep={page} /></div></div>
                {page === 0 && <PreTripInspection onSubmit={this.nextPage} />}
                {page === 1 && (
                    <Coupling
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                    />
                    // <MISCELLANEOUS
                    //   previousPage={this.previousPage}
                    //   onSubmit={this.nextPage}
                    // />
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
                        onSubmit={SubmitHandler}
                        onClick="./end-test"
                    />
                )}
            </Card>
        );
    }



    Form.propTypes = {
        onSubmit: PropTypes.func
    };

    export default Form;




    const { onSubmit } = props;
    const { page, steps } = state;

    return (
        <Card>

            <div class="form-row">
                <div class="form-group col-md-sm-12">
                    <Stepper class="form-control" steps={steps} activeStep={page} /></div></div>
            {page === 0 && <PreTripInspection onSubmit={this.nextPage} />}
            {page === 1 && (
                <Coupling
                    previousPage={this.previousPage}
                    onSubmit={this.nextPage}
                />
                // <MISCELLANEOUS
                //   previousPage={this.previousPage}
                //   onSubmit={this.nextPage}
                // />
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
                    onSubmit={SubmitHandler}
                    onClick="./end-test"
                />
            )}
        </Card>
    );
}



Form.propTypes = {
    onSubmit: PropTypes.func
};

export default Form;
