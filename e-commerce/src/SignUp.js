import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("user");
        if(auth){
            navigate("/")
        }
    }, [])

    const HandleChange = (e) => { 
            setInput({
                ...input,  
                [e.target.name] : e.target.value
            });
    }
    const collectData = async () => {
        console.log(input);
        let result = await fetch("http://localhost:5000/register", {
            method: "post",
            body: JSON.stringify(input),
            headers: {
                "Content-Type": "application/json"
            },
        })
        result = await result.json()
            console.log(result);
                localStorage.setItem("user", JSON.stringify(result))
                navigate("/")
    }

  return (
    <>
   <div className='form'>
    <h1>Register</h1>
    <input className='input-box' type="text" value={input.name} onChange={HandleChange} name='name' placeholder='Enter Name' />
    <input className='input-box' type="text" value={input.email} onChange={HandleChange} name='email' placeholder='Enter Email' />
    <input className='input-box' type="password" value={input.password} onChange={HandleChange} name='password' placeholder='Enter Password' />
    <button className='btn' type='button' onClick={collectData}>Sign Up</button>
   </div>
   </>
  )
}

export default SignUp