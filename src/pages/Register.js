import React, { useState } from "react";
import axios from "axios";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [createPwd, setCreatePwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const handleNameChange = (value) => {
    setName(value);
  };
  const handleEmailChange = (value) => {
    setEmail(value);
  };
  const handlePhoneChange = (value) => {
    setPhone(value);
  };
  const handleUsernameChange = (value) => {
    setUsername(value);
  };
  const handleCreatePassChange = (value) => {
    setCreatePwd(value);
  };
  const handleConfirmPassChange = (value) => {
    setConfirmPwd(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // debugger;
    if (confirmPwd !== createPwd) {
      alert("Password donot match");
      return;
    }
    const data = {
      Name: name,
      Email: email,
      PhoneNumber: phone,
      UserName: username,
      Password: confirmPwd,
    };
    console.log(data);
    // debugger;
    const url = "https://localhost:7178/User/register";
    try {
      await axios.post(url, data).then((result) => {
        if (result.status === 200) {
          console.log("success");
        } else if (result.status === 409) {
          console.log("conflict");
        }
        alert(result.data);
      });
    } catch (error) {
        // if(error)
        console.log(error);
        if(error.response.data.length >0){
            var array = error.response.data
            array.forEach(element => {
                
                alert(element.code);
            });
        }
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Register</h2>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          id="txtName"
          onChange={(e) => handleNameChange(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          id="txtEmail"
          onChange={(e) => handleEmailChange(e.target.value)}
          required
        />

        <label>Phone No</label>
        <input
          type="tel"
          placeholder="Phone Number"
          id="txtPhone"
          onChange={(e) => handlePhoneChange(e.target.value)}
          required
          pattern="[0-9]{10}"
        />

        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          id="txtUsername"
          onChange={(e) => handleUsernameChange(e.target.value)}
          required
        />

        <label>Create Password</label>
        <input
          type="text"
          placeholder="Create Password"
          id="crtPassword"
          onChange={(e) => handleCreatePassChange(e.target.value)}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          id="cnfmPassword"
          onChange={(e) => handleConfirmPassChange(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
