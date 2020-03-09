import React from 'react';

function DriverLogin(props) {
    let driverLogin = (e) => {
        props.history.push("/driverinfo");
    }
    return (
        <div className="Container">

            <header className="panel-heading">

                <h2 className="panel-title">Driver Login</h2>
            </header>



            <form onSubmit={driverLogin}>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label for="validationTooltip01">First name</label>
                        <input type="text" className="form-control" id="validationTooltip01" autocomplete="off" placeholder="First name" required />

                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="validationTooltip02">Last name</label>
                        <input type="text" className="form-control" id="validationTooltip02" autocomplete="off" placeholder="Last name" required />

                    </div>

                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label for="validationTooltip03">License Number</label>
                        <input type="text" className="form-control" id="validationTooltip03" autocomplete="off" placeholder="License Number" required />

                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>


            </form>
        </div>
    )
}
export default DriverLogin;