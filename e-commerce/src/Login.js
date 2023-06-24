import {React, useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const Login = () => {

    const [input, setInput] = useState({
        email: "",
        password: ""
    })
    
    useEffect(() => {
        const auth = localStorage.getItem("user");
        if(auth){
            navigate("/")
        }
    })

    const HandleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const navigate = useNavigate();

    const collectData = async () => {
        console.log(input);
        let result = await fetch("http://localhost:5000/login", {
        method: "post",
        body: JSON.stringify(input),
        headers: {
            "Content-Type": "application/json"
        }
    });
    result = await result.json();
    console.log(result);

    if(result.name){
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/")
    } else{
        alert("Please Enter Correct Details")
    }

    }
  return (
    <>
    <div className='form space'>
        <h1>Login</h1>
        <input className='input-box' type="email" onChange={HandleChange} placeholder='Enter Email' name='email' value={input.email} />
        <input className='input-box' type="password" onChange={HandleChange} placeholder='Enter Password' name='password' value={input.password} />
        <button className='btn' onClick={collectData}>Login</button>
    </div>
    </>
  )  
}

export default Login