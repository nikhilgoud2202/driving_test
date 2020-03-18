import React, { Component } from 'react';
import axios from 'axios';
import {
    Button,
    Card,
    CardBody,
    Col,
    FormGroup
} from 'reactstrap';
import { render } from 'react-dom';
import Header from './Header';


class UserData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            driverInfo: {},
            endInfo: {},
            answers: {}


        }
    }
    componentDidMount() {




    }
    handleChange = (e) => {

        this.setState({ [e.target.name]: e.target.value })

    }
    SubmitHandler = (e) => {
        e.preventDefault();
        alert(this.state.licenseNumber)
        let licenseNumber = this.state.licenseNumber;
        axios.post("https://drivingtest.herokuapp.com/getDriverDetails", {
            licenseNumber
        })
            .then(
                resp => {
                    console.log("driverinfo", resp.data)

                    this.setState({ driverInfo: resp.data })

                })
        axios.post("https://drivingtest.herokuapp.com/getTestInformation", {
            licenseNumber
        })
            .then(
                resp => {
                    console.log("test Information", resp.data)

                    this.setState({ endInfo: resp.data })

                })
        axios.post("https://drivingtest.herokuapp.com/getAnswers", {
            licenseNumber
        })
            .then(
                resp => {
                    console.log("Answers", resp.data)

                    this.setState({ answers: resp.data })

                })
    }



    render() {

        return (
            <div>
                <Header show={true} />
                <div className="Container ">
                    <Card className="card-border">
                        <CardBody>
                            <header class="panel-heading">

                                <h4 class="panel-title">Driver Information:</h4>
                            </header>
                            <form>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Enter License number</label>
                                        <input type="text" class="form-control" name="licenseNumber" value={this.state.licenseNumber} onChange={this.handleChange} placeholder="License number" required />
                                    </div>
                                    <div class="form-group col-md-6">

                                    </div> <div class="form-group col-md-6">
                                        <button type="submit" onClick={this.SubmitHandler} class="btn btn-primary  pull-right">Submit</button>
                                    </div>
                                </div>
                            </form>

                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}
export default UserData;