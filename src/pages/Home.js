import { useEffect, useState } from "react";
import Login from "./Login";
import Destinations from "./Destinations";

const Home = ()=>{
    useEffect(
        ()=>{
            const storedToken = localStorage.getItem('token');
            if(storedToken){
                setToken(storedToken);
            }
        }
        ,[])
    const[token,setToken] = useState(null);
    const handleLogin = (token)=>{
        localStorage.setItem('token',token)
        setToken(token);
    }
    return(
        <>
        {!token ? <Login onLogin = {handleLogin}/> : <Destinations/>}
        </>
    )
}
export default Home;