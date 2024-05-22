import React, { Fragment , useState} from "react";
import axios from "axios";
function Register() {
    const[name , setName ] = useState('');
    const[email , setEmail ] = useState('');
    const[phone , setPhone ] = useState('');
    const[username , setUsername ] = useState('');
    const[createPwd , setCreatePwd ] = useState('');
    const[confirmPwd , setConfirmPwd ] = useState('');

    const handleNameChange = (value)=>{
        setName(value);
    } 
    const handleEmailChange = (value)=>{
        setEmail(value);
    } 
    const handlePhoneChange = (value)=>{
        setPhone(value);
    } 
    const handleUsernameChange = (value)=>{
        setUsername(value);
    } 
    const handleCreatePassChange = (value)=>{
        setCreatePwd(value);
    } 
    const handleConfirmPassChange = (value)=>{
        setCreatePwd(value);
    } 
    const handleSubmit = ()=>{
        if(confirmPwd !== createPwd){
            throw new Error();
        }
        const data = {
            Name : name,
            Email : email,
            PhoneNumber : phone,
            UserName : username,
            Password : confirmPwd
        };

        const url = '';
        axios.post(url,data).then((result)=>{
            if(result.status === 200 ){
                console.log("success");
            }else if(result.status === 409)
                {
                    console.log("conflict");
                }
        }); 
    }

  return (
    <Fragment>
      <div>Register</div>
      <label>Name</label>
      <input 
      type="text" 
      placeholder="Enter your name" 
      id="txtName" 
      onChange={(e)=>handleNameChange(e.target.value)}
      /><br></br>

      <label>Email</label>
      <input
       type="email" 
       placeholder="Enter your email" 
       id="txtEmail"
       onChange={(e)=>handleEmailChange(e.target.value)}
       /><br></br>

      <label>Phone No</label>
      <input
       type="tel"
        placeholder="Phone Number" 
        id="txtPhone"
        onChange={(e)=>handlePhoneChange(e.target.value)}
        /><br></br>

      <label>Username</label>
      <input 
      type="text" 
      placeholder="Username" 
      id="txtUsername"
      onChange={(e)=>handleUsernameChange(e.target.value)}
      /><br></br>

      <label>Create Password</label>
      <input 
      type="text"
       placeholder="Create Password" 
       id="crtPassword"
       onChange={(e)=>handleCreatePassChange(e.target.value)}
       /><br></br>

      <label>Confirm Password</label>
      <input 
      type="password" 
      placeholder="Confirm Password" 
      id="cnfmPassword"
      onChange={(e)=>handleConfirmPassChange(e.target.value)}
      /><br></br>

      <button 
      onClick={()=>handleSubmit}
      >Submit</button>
    </Fragment>
  );
}

export default Register;
