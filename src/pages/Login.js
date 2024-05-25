import axios from "axios";
import React, { useState } from "react";
const Login = ({onLogin})=> {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsernameChange = (value) => {
    setUsername(value);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const url = "https://localhost:7178/Login";
    const data = {
      username: username,
      password: password,
    };
    try {
      await axios.post(url, data).then((result) => {
        // debugger;
        console.log(result.data);
        onLogin(result.data);
        alert("Log in success");
      });
    } catch (error) {
      // debugger;
      console.log(error);
      alert(error.response.data.title);
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleLogin} className="form">
        <h2>Login</h2>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          id="txtUsername"
          onChange={(e) => handleUsernameChange(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={(e) => handlePasswordChange(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
