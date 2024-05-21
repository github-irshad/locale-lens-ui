import React, { Fragment } from "react";
function Register() {
  return (
    <Fragment>
      <div>Register</div>
      <label>Name</label>
      <input type="text" placeholder="Enter your name" id="txtName"/><br></br>
      <label>Email</label>
      <input type="email" placeholder="Enter your email" id="txtEmail"/><br></br>
      <label>Phone No</label>
      <input type="tel" placeholder="Phone Number" id="txtPhone"/><br></br>
      <label>Username</label>
      <input type="text" placeholder="Username" id="txtUsername"/><br></br>
      <label>Create Password</label>
      <input type="text" placeholder="Create Password" id="crtPassword"/><br></br>
      <label>Confirm Password</label>
      <input type="password" placeholder="Confirm Password" id="cnfmPassword"/><br></br>
      <button>Submit</button>
    </Fragment>
  );
}

export default Register;
