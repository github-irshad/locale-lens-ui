import React,{ Fragment } from "react";
function Login(){
  const[username , setUsername ] = useState('');
    const[createPwd , setCreatePwd ] = useState('');
return (
    <Fragment>
      <div>Login</div>
      <label>Username</label>
      <input type="text" placeholder="Username" id="txtUsername"/><br></br>
      <label>Password</label>
      <input type="password" placeholder="Confirm Password" id="cnfmPassword"/><br></br>
      <button>Login</button>
    </Fragment>
)
}

export default Login;