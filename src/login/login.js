import React from 'react';

function Login(props) {
  let LoginHandler = (e) => {
    props.history.push("/driverlogin");
  }
  return (
    <div className="Container">
      <header className="panel-heading">

        <h2 className="panel-title">Login</h2>
      </header>
      <form onSubmit={LoginHandler}>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label for="validationTooltip03">User Name</label>
            <input type="text" className="form-control" id="validationTooltip03" autocomplete="off" placeholder="User Name" required />

          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label for="validationTooltip03">Password</label>
            <input type="password" className="form-control" id="validationTooltip03" autocomplete="off" placeholder="Password" required />

          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </div>

      </form>
    </div>
  )
}



export default Login;